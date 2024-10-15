<?php
require 'db.php';
require 'TaskManager.php';

$taskManager = new TaskManager($conn);
$taskData = json_decode(file_get_contents("php://input"), true);
$taskManager->updateTask($_GET['id'], $taskData);
echo json_encode(['status' => 'Task updated']);
?>
