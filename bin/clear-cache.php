<?php
/**
 * Script para limpar o cache de arquivo
 * Uso: php bin/clear-cache.php
 * 
 * Deleta todos os arquivos de cache armazenados
 */

require_once __DIR__ . '/../vendor/autoload.php';

use Application\Service\FileCache;

echo "🧹 Limpando cache...\n\n";

try {
    $cache = new FileCache();
    $cache->clear();
    
    echo "✅ Cache limpo com sucesso!\n";
    echo "📂 Diretório: " . __DIR__ . '/../data/cache/\n';
    echo "\nTodo o cache foi removido. Na próxima requisição, dados serão recarregados do banco.\n";
    
} catch (\Exception $e) {
    echo "❌ Erro ao limpar cache: " . $e->getMessage() . "\n";
    exit(1);
}
