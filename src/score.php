<?php
    $score = $_GET['score'];
    $ip = $_SERVER['REMOTE_ADDR'];
    file_put_contents('data.csv', "$ip, $score\n", FILE_APPEND | LOCK_EX);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="index.css">

    <title>Stats Set</title>
</head>
<body>
    <div class="center">
        <h1>Game Over!</h1>
        <p>
            Your score was: <b><?php echo $_GET['score'] ?></b>
            <br><br>
            <a href="index.html" class="btn btn-outline-success">Click to play again</a>
        </p>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js"></script>
</body>
</html>
