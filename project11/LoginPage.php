<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buzz Login Form</title>
</head>
<body>
    <div>banner</div>
    <h1>What's All The BUZZ about?</h1>
    <form action="login.php" method="POST">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>
        
        <button type="submit">Login</button>
    </form>
    
    <?php
        $valid_username = "user1";
        $valid_password = "password123";


        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $username = $_POST['username'];
            $password = $_POST['password'];

            if ($username === $valid_username && $password === $valid_password) {
                header("Location: feed.html");
                exit();
            } else {
                echo "Invalid username or password!";
            }
        }
    ?>
</body>
</html>