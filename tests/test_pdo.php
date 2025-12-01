<?php
// Teste simples de PDO usando config de config/autoload/doctrine.local.php
$host = 'buqhwzttbfnrkryplja1-mysql.services.clever-cloud.com';
$port = 3306;
$dbname = 'buqhwzttbfnrkryplja1';
$user = 'u1o3iwc66b56iik7';
$pass = 'SSExIOA2cAcORbYjQ4JC';
$charset = 'utf8mb4';

$dsn = "mysql:host={$host};port={$port};dbname={$dbname};charset={$charset}";

echo "Tentando conectar com DSN: {$dsn}\n";
try {
    $pdo = new PDO($dsn, $user, $pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    echo "Conectado com sucesso. PDO driver disponível.\n";
} catch (PDOException $e) {
    echo "Falha na conexão: " . $e->getMessage() . "\n";
    exit(1);
}

return 0;
