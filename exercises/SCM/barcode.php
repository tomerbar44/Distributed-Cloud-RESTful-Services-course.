<!DOCTYPE html>
<html>

<head>
    <title>SCM</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="includes/style.css">
</head>

<body id="barcodeLayout">
    <div id="wrapper">

        <header>
            <section class="loginLine">
                <a href="#"><?php session_start();
                 echo  $_SESSION["user_name"];?></a>
                <a href="#">Support</a>
            </section>
            <a class="logo1" href="index_user.php"></a>
            <a class="logo2" href="index_user.php"></a>
        </header>

        <nav>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="index_user.php">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trainings</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="facilitysLayout.php">Facilities</a>
                </li>
            </ul>
        </nav>

        <ul class="breadcrumb">
            <li><a href="index_user.php">Home</a></li>
            <li class="currentPage">Entrance to the center</li>
        </ul>
        
        <main></main>

        <footer>
            <h3>Messages:</h3>
            <p>Boxing training is canceled today</p>
        </footer>
    </div>
</body>

</html>