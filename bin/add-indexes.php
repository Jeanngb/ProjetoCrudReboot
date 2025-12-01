<?php
/**
 * Script para adicionar índices de performance ao banco
 * Uso: php bin/add-indexes.php
 * 
 * Cria índices em colunas frequentemente consultadas
 */

require_once __DIR__ . '/../vendor/autoload.php';

use Doctrine\DBAL\DriverManager;

$connectionParams = [
    'driver'   => 'pdo_mysql',
    'host'     => 'buqhwzttbfnrkryplja1-mysql.services.clever-cloud.com',
    'port'     => 3306,
    'user'     => 'u1o3iwc66b56iik7',
    'password' => 'SSExIOA2cAcORbYjQ4JC',
    'dbname'   => 'buqhwzttbfnrkryplja1',
    'charset'  => 'utf8mb4',
];

try {
    $connection = DriverManager::getConnection($connectionParams);
    
    echo "🔧 Adicionando índices para otimizar performance...\n\n";
    
    // Índice em 'nome' para buscas e ordenação
    try {
        $connection->executeStatement(
            'ALTER TABLE filmes ADD INDEX idx_nome (nome)'
        );
        echo "✅ Índice em 'nome' criado com sucesso\n";
    } catch (\Exception $e) {
        if (strpos($e->getMessage(), 'Duplicate key') !== false) {
            echo "⏭️  Índice em 'nome' já existe\n";
        } else {
            echo "⚠️  Erro ao criar índice 'nome': " . $e->getMessage() . "\n";
        }
    }
    
    // Índice em 'id' (geralmente é PK, mas garantir)
    try {
        $connection->executeStatement(
            'ALTER TABLE filmes ADD INDEX idx_id (id)'
        );
        echo "✅ Índice em 'id' criado com sucesso\n";
    } catch (\Exception $e) {
        if (strpos($e->getMessage(), 'Duplicate key') !== false) {
            echo "⏭️  Índice em 'id' já existe\n";
        } else {
            echo "⚠️  Erro ao criar índice 'id': " . $e->getMessage() . "\n";
        }
    }
    
    // Índice composto em genero+nota para filtros (futuro)
    try {
        $connection->executeStatement(
            'ALTER TABLE filmes ADD INDEX idx_genero_nota (genero, nota)'
        );
        echo "✅ Índice composto em 'genero+nota' criado com sucesso\n";
    } catch (\Exception $e) {
        if (strpos($e->getMessage(), 'Duplicate key') !== false) {
            echo "⏭️  Índice 'genero+nota' já existe\n";
        } else {
            echo "⚠️  Erro ao criar índice: " . $e->getMessage() . "\n";
        }
    }
    
    echo "\n✨ Índices configurados! O banco agora será muito mais rápido.\n";
    
} catch (\Exception $e) {
    echo "❌ Erro de conexão: " . $e->getMessage() . "\n";
    exit(1);
}
