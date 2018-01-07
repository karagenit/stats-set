<?php
    $score = $_GET['score'];
    $ip = $_SERVER['REMOTE_ADDR'];
    file_put_contents('data.csv', "$ip, $score\n", FILE_APPEND | LOCK_EX);
?>

<!DOCTYPE html>
<html>
<body>
    <p>Your score was: <?php echo $_GET['score'] ?></p>
    <p><a href="index.html">Click to play again</a></p>
</body>
</html>
