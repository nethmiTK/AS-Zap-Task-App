<?php
include 'db.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "DELETE FROM tasks WHERE id=$id";
    if ($conn->query($sql) === TRUE) {
        header("Location: index.php");
    } else {
        echo "Error deleting record: " . $conn->error;
    }
}
?>
