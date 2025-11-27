## Habilitar PDO MySQL (Windows)

Este script auxilia a habilitar a extensão `pdo_mysql` no `php.ini` usado pelo PHP CLI.

Como usar:

1. Abra o PowerShell como Administrador.
2. Navegue até a pasta do projeto onde o script está:
   ```powershell
   cd C:\projetoFilmesCopy\projetoFilmesCopy\scripts
   ```
3. Execute o script:
   ```powershell
   .\enable-pdo-mysql.ps1
   ```

O que o script faz:
- Detecta o `php.ini` (saída de `php --ini`).
- Cria um backup (`php.ini.bak.YYYYMMDD-HHMMSS`).
- Ajusta `extension_dir` para o diretório `ext` que está ao lado do `php.exe`.
- Descomenta/ativa `pdo_mysql` e `mysqli` (em várias formas comuns).

Após executar o script, reinicie o servidor web (IIS/Apache/XAMPP) ou o serviço PHP-FPM para aplicar as mudanças.

Se preferir, revise o backup criado antes de substituir o arquivo original.

Se precisar, cole aqui a saída do script ou `php -m` e eu verifico os próximos passos.
