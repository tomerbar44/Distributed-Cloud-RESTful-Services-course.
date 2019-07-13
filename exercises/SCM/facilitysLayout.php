<!DOCTYPE html>
<html>

<head>
    <title>SCM</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="includes/style.css">
</head>

<body id="facilityLayout">
    <div id="wrapper">
        <header>
            <section class="loginLine">
                <a href="#"><?php session_start();
                 echo  $_SESSION["user_name"];?></a>
                <a href="#">Support</a>
            </section>
            <a class="logo1" href="index_admin.php"></a>
            <a class="logo2" href="index_admin.php"></a>
        </header>
        <nav>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link" href="index_admin.php">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Report</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="facilitysLayout.php">Facilities</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Subscribers</a>
                </li>
            </ul>
        </nav>
        <ul class="breadcrumb">
            <li><a href="index_admin.php">Home</a></li>
            <li class="currentPage">Facilities</li>
        </ul>
        <main>
            <div class="aerobic">
                  <!-- static 
                <a class="facilitieLink" href="#"><img src="images/ELEPHATIC.jpg" alt="">Elephatic</a>
                <a class="facilitieLink" href="#"><img src="images/Fitness_bike.jpg" alt="">Fitness bike</a>
                <a class="facilitieLink" href="#"><img src="images/Treadmill.jpg" alt="">Treadmill</a>
                <a class="facilitieLink" href="facilityDetailsLayout.php"><img src="images/Stairs.jpg" alt="">Stairs</a>
                <a class="facilitieLink" href="#"><img src="images/Backrest_bike.jpg" alt="">Backrest bike</a> -->
            </div>
            <div class="power">
                <!-- static 
                <a class="facilitieLink" href="#"><img src="images/Breast_Pressing.png" alt="">Breast pressing</a>
                <a class="facilitieLink" href="#"><img src="images/Hip_pressing.jpg" alt="">Hip pressing</a>
                <a class="facilitieLink" href="#"><img src="images/Hip_push.jpg" alt="">Hip push</a>
                <a class="facilitieLink" href="#"><img src="images/Knee_Pressing.png" alt="">Knee pressing</a>
                <a class="facilitieLink" href="#"><img src="images/Knee_bending.jpg" alt="">Knee bending</a>
                <a class="facilitieLink" href="#"><img src="images/Legs_pressing.png" alt="">Legs pressing</a>
                <a class="facilitieLink" href="#"><img src="images/Shoulder_Pressing.jpg" alt="">Shoulder pressing</a>-->
            </div>
        </main>
        <aside>
            <img src="images/filter_icon.png" alt="">
            <span style="cursor:pointer"> <h3 id="filterAll">All</h3></span>
            <span style="cursor:pointer"> <h3 id="filterPower">Power</h3></span>
            <span style="cursor:pointer"><h3 id="filterAerobic">Aerobic</h3></span>
        </aside>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="includes/jsFile.js"></script>
    <script src="includes/main.js"></script>
</body>

</html>