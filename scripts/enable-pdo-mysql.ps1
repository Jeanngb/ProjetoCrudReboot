<#
  enable-pdo-mysql.ps1

  Backup e habilita `pdo_mysql` e `mysqli` no php.ini usado pelo comando `php`.
  Uso (execute em PowerShell com privilégios de administrador):
    PS> .\enable-pdo-mysql.ps1

  O script:
  - Detecta o `Loaded Configuration File` do PHP CLI via `php --ini`.
  - Faz backup do php.ini com timestamp.
  - Ajusta `extension_dir` para o diretório `ext` ao lado do `php.exe`.
  - Descomenta/ativa `pdo_mysql` e `mysqli` (tenta várias formas).
  - Salva o php.ini modificado.

  Observação: este script modifica o arquivo do sistema. Revise o backup antes de substituir.
#>

try {
    $iniLine = & php --ini 2>&1 | Select-String 'Loaded Configuration File:'
} catch {
    Write-Error "Falha ao executar 'php --ini'. Verifique se 'php' está no PATH."
    exit 1
}

if (-not $iniLine) {
    Write-Error "Não foi encontrado 'Loaded Configuration File' na saída de 'php --ini'. Verifique a instalação do PHP."
    exit 1
}

$iniPath = $iniLine.ToString().Split(':',2)[1].Trim()
if (-not (Test-Path $iniPath)) {
    Write-Error "Arquivo php.ini não encontrado em: $iniPath"
    exit 1
}

$phpExe = (Get-Command php -ErrorAction Stop).Source
$phpDir = Split-Path $phpExe -Parent
$extDir = Join-Path $phpDir 'ext'

Write-Output "php.ini detectado: $iniPath"
Write-Output "php.exe detectado: $phpExe"
Write-Output "Ajustando extension_dir para: $extDir"

$timestamp = (Get-Date).ToString('yyyyMMdd-HHmmss')
$backupPath = "${iniPath}.bak.$timestamp"
Copy-Item -Path $iniPath -Destination $backupPath -Force
Write-Output "Backup criado em: $backupPath"

$content = Get-Content -Path $iniPath -Raw -ErrorAction Stop

# Atualizar extension_dir (cria se não existir)
$patternDir = '^(\s*;?\s*extension_dir\s*=\s*).*$'
if ($content -match '(?m)' + $patternDir) {
    $content = [regex]::Replace($content, '(?m)' + $patternDir, "`$1\"$extDir\"")
} else {
    $content = "extension_dir = \"$extDir\"`r`n" + $content
}

# Descomentar/ativar formas comuns de declaração de pdo_mysql e mysqli
$content = [regex]::Replace($content, '(?m)^\s*;\s*extension\s*=\s*php_pdo_mysql\.dll\s*$', 'extension=php_pdo_mysql.dll')
$content = [regex]::Replace($content, '(?m)^\s*;\s*extension\s*=\s*pdo_mysql\s*$', 'extension=php_pdo_mysql.dll')
$content = [regex]::Replace($content, '(?m)^\s*;\s*extension\s*=\s*mysqli\s*$', 'extension=mysqli')

# Se não existir nenhuma linha habilitando pdo_mysql, acrescenta ao final
if ($content -notmatch '(?m)^[^;]*extension\s*=\s*(php_pdo_mysql\.dll|pdo_mysql)') {
    $content += "`r`nextension=php_pdo_mysql.dll`r`n"
}
if ($content -notmatch '(?m)^[^;]*extension\s*=\s*mysqli') {
    $content += "extension=mysqli`r`n"
}

# Gravar arquivo (mantendo codificação UTF8 sem BOM)
Set-Content -Path $iniPath -Value $content -Encoding UTF8

Write-Output "php.ini atualizado. Reinicie o servidor web / serviço PHP para aplicar as mudanças."
Write-Output "Se algo deu errado, restaure o backup: copy '$backupPath' '$iniPath'"

exit 0
