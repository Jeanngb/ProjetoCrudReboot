<?php
namespace Application\Service;

/**
 * Cache simples baseado em arquivo
 * Não requer Redis ou Memcached - funciona com filesystem
 * 
 * Uso:
 * $cache = new FileCache();
 * $cache->set('chave', $dados, 300); // 5 minutos
 * $dados = $cache->get('chave');
 * $cache->delete('chave');
 * $cache->clear(); // limpar tudo
 */
class FileCache
{
    private string $cacheDir;
    private string $prefix = 'cache_';
    
    public function __construct(string $cacheDir = null)
    {
        if ($cacheDir === null) {
            $cacheDir = __DIR__ . '/../../data/cache';
        }
        
        $this->cacheDir = $cacheDir;
        
        // Criar diretório se não existir
        if (!is_dir($this->cacheDir)) {
            mkdir($this->cacheDir, 0755, true);
        }
    }
    
    /**
     * Salvar valor em cache
     * @param string $key Chave única
     * @param mixed $value Valor a cachear
     * @param int $ttl Tempo de vida em segundos (0 = sem expiração)
     */
    public function set(string $key, mixed $value, int $ttl = 0): bool
    {
        $filename = $this->getFilename($key);
        $data = [
            'value' => $value,
            'expires' => $ttl > 0 ? (time() + $ttl) : 0,
        ];
        
        $serialized = serialize($data);
        $written = file_put_contents($filename, $serialized, LOCK_EX);
        
        return $written !== false;
    }
    
    /**
     * Obter valor do cache
     * @param string $key Chave única
     * @param mixed $default Valor padrão se não encontrar
     */
    public function get(string $key, mixed $default = null): mixed
    {
        $filename = $this->getFilename($key);
        
        if (!file_exists($filename)) {
            return $default;
        }
        
        $serialized = file_get_contents($filename);
        if ($serialized === false) {
            return $default;
        }
        
        try {
            $data = unserialize($serialized, ['allowed_classes' => true]);
        } catch (\Exception $e) {
            return $default;
        }
        
        // Verificar expiração
        if (isset($data['expires']) && $data['expires'] > 0 && $data['expires'] < time()) {
            $this->delete($key);
            return $default;
        }
        
        return $data['value'] ?? $default;
    }
    
    /**
     * Verificar se chave existe e é válida
     */
    public function has(string $key): bool
    {
        $filename = $this->getFilename($key);
        
        if (!file_exists($filename)) {
            return false;
        }
        
        $serialized = file_get_contents($filename);
        if ($serialized === false) {
            return false;
        }
        
        try {
            $data = unserialize($serialized, ['allowed_classes' => true]);
        } catch (\Exception $e) {
            return false;
        }
        
        // Verificar expiração
        if (isset($data['expires']) && $data['expires'] > 0 && $data['expires'] < time()) {
            $this->delete($key);
            return false;
        }
        
        return true;
    }
    
    /**
     * Deletar chave específica
     */
    public function delete(string $key): bool
    {
        $filename = $this->getFilename($key);
        
        if (!file_exists($filename)) {
            return true;
        }
        
        return unlink($filename);
    }
    
    /**
     * Limpar todo o cache
     */
    public function clear(): bool
    {
        $files = glob($this->cacheDir . '/' . $this->prefix . '*');
        
        if ($files === false) {
            return false;
        }
        
        foreach ($files as $file) {
            if (is_file($file)) {
                unlink($file);
            }
        }
        
        return true;
    }
    
    /**
     * Obter caminho do arquivo de cache
     */
    private function getFilename(string $key): string
    {
        // Sanitizar key para ser seguro como filename
        $safe_key = preg_replace('/[^a-zA-Z0-9_-]/', '_', $key);
        return $this->cacheDir . '/' . $this->prefix . $safe_key . '.cache';
    }
}
