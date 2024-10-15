<?php
require 'db.php';
require 'TaskManager.php';

$taskManager = new TaskManager($conn);
$taskData = json_decode(file_get_contents("php://input"), true);
$taskManager->createTask($taskData);
echo json_encode(['status' => 'Task created']);
?>
