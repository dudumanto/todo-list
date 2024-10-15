<?php
require 'db.php';
require 'TaskManager.php';

$taskManager = new TaskManager($conn);
$taskManager->deleteTask($_GET['id']);
echo json_encode(['status' => 'Task deleted']);
?>
