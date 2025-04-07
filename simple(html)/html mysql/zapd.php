<?php include 'db.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zap Task - Completed</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <?php include 'navbar.php'; ?>

    <h2>🎉 Congratulations! Tasks Completed!</h2>
    <ul>
        <?php
        $sql = "SELECT * FROM tasks WHERE status='Completed'";
        $result = $conn->query($sql);
        while ($row = $result->fetch_assoc()) {
            echo "<li>{$row['title']}</li>";
        }
        ?>
    </ul>

</body>
</html>
