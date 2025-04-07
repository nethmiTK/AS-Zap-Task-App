<?php include 'db.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zap Task - Task Bitz</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <?php include 'navbar.php'; ?>

    <h2>INPUT YOUR TASK</h2>
    <form action="add_task.php" method="POST">
        <input type="text" name="task" placeholder="Enter your task" required>
        <button type="submit">ADD</button>
    </form>

</body>
</html>
