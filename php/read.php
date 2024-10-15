<?php
require 'db.php';
require 'TaskManager.php';

$taskManager = new TaskManager($conn);
$tasks = $taskManager->readTasks();
echo json_encode($tasks);
?>
