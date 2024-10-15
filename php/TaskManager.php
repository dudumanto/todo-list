<?php
class TaskManager {
    private $conn;

    public function __construct($dbConnection) {
        $this->conn = $dbConnection;
    }

    public function createTask($taskData) {
        if (empty($taskData['title'])) {
            throw new Exception('Title is required');
        }
    
        $title = $taskData['title'];
        $description = $taskData['description'] ?? '';
        $tags = $taskData['tags'] ?? '';
    
        $stmt = $this->conn->prepare("INSERT INTO tasks (title, description, tags) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $title, $description, $tags);
        
        if (!$stmt->execute()) {
            throw new Exception('Database error: ' . $stmt->error);
        }
    
        return $stmt->insert_id; 
    }
    

    public function readTasks() {
        $result = $this->conn->query("SELECT * FROM tasks");
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function updateTask($taskId, $taskData) {
        $stmt = $this->conn->prepare("UPDATE tasks SET title=?, description=?, tags=? WHERE id=?");
        $stmt->bind_param("sssi", $taskData['title'], $taskData['description'], $taskData['tags'], $taskId);
        $stmt->execute();
    }

    public function deleteTask($taskId) {
        $stmt = $this->conn->prepare("DELETE FROM tasks WHERE id=?");
        $stmt->bind_param("i", $taskId);
        $stmt->execute();
    }

    public function searchTasks($searchTerm) {
        $stmt = $this->conn->prepare("SELECT * FROM tasks WHERE title LIKE ? OR description LIKE ?");
        $likeTerm = "%" . $searchTerm . "%";
        $stmt->bind_param("ss", $likeTerm, $likeTerm);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }
}
?>
