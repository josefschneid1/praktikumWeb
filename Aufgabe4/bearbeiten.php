<?php
    session_start();
    if($_SESSION['login'] == false)
    {
        header('Location: abbildung2.php'); 
        exit();
    }
?>


<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Bearbeiten</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
    <h1>Daten bearbeiten</h1>
    <form action="abbildung1.php" method="POST">

        <label>Name<input type="text" name="name"></label><br>
        <label>Geburtsdatum<input type="date" name="date"></label><br>
        <label>Geburtsort<input type="text" name="city"></label><br>
        <button type="submit">speichern</button> 
        <a href="abbildung1.php"><button type="button">abbrechen</button></a>
    </form>


</body>

</html>