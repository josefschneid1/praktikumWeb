<?php
    session_start();
    $displayError = false;
    if(isset($_POST['pwd']))
    {
        if($_POST['pwd'] == 'passwort')
        {
            $_SESSION['login'] = true;
            header('Location: bearbeiten.php');
            exit();
        }else
        {
            $displayError = true;
        }  
    }
?>



<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Abbildung1</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
    <h1>Login zum Bearbeiten der Daten von <?php echo $_SESSION['name']?></h1>
    <form action="abbildung2.php" method="POST" >
        <label>Passwort:<input type="password" name="pwd"></label>
        <button type="submit">login</button>
    </form>
    <?php 
        if($displayError)
        {
            echo '<p>Falsches Passwort!</p>';
        }
    ?>
</body>

</html>