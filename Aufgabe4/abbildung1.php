<?php
    session_start();
    
    if(count($_SESSION) == 0) // Erster Besuch
    {
        //Werte vorbelegen
        $_SESSION['name'] = 'Bart Simpson';
        $_SESSION['date'] = '?.?.1985';
        $_SESSION['city'] = 'Hollywood';
        $_SESSION['login'] = false;
    }else if(count($_SESSION) > 0 && count($_POST) > 0) //Bearbeiten mit Änderung -> Homepage
    {
        //Werte übertragen
        $_SESSION['name'] = $_POST['name'];
        $_SESSION['date'] = $_POST['date'];
        $_SESSION['city'] = $_POST['city'];
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

   


    <div class="page">
    <h1>Willkommen auf der Homepage von
        <?php echo $_SESSION['name'];?>!
    </h1>
        <div class="content">
            <ul class="nav nav-tabs">
                <li class="nav-item active"><a class="nav-link active" data-toggle="tab" href="#me">Das bin ich</a></li>
                <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#past">Meine Vergangenheit</a></li>
                <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#like">Was ich mag</a></li>
            </ul>




            <div class="tab-content">

                <div id="me" class="tab-pane active">

                    <h1>Mein Steckbrief:</h1>
                    <div class="picture">
                        <img src="images/bart.jpeg">
                    </div>
                    <div class="infos">
                        <span class="info">Name:</span>
                        <?php echo $_SESSION['name']; ?><br>
                        <span class="info">Geburtsdatum:</span>
                        <?php echo $_SESSION['date']; ?><br>
                        <span class="info">Ort:</span>
                        <?php echo $_SESSION['city']; ?><br>
                        ...

                    </div>
                    <div class="clearfix"></div>

                </div>
                <div id="past" class="tab-pane">


                </div>
                <div id="like" class="tab-pane">


                </div>


            </div>
        </div>
        <a href="bearbeiten.php"><button type="button">Angaben ändern</button></a>

    </div>

</body>

</html>