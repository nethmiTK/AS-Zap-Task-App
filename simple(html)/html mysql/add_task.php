<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $task = $_POST['task'];
    $sql = "INSERT INTO tasks (title) VALUES ('$task')";
    if ($conn->query($sql) === TRUE) {
        header("Location: taskbitz.php");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>
