<?php
$host = 'localhost';
$user = 'root'; // Seu usuário
$password = '240617240617'; // Sua senha
$database = 'todo_db'; // Nome do banco de dados

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>
