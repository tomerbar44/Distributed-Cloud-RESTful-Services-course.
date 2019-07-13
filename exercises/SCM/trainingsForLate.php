<!DOCTYPE html>
<html>

<head>
    <title>SCM</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="includes/style.css">
</head>

<body id="trainingsForLateLayout">
    <div id="wrapper">
        <header>
            <section class="loginLine">
                <a href="informationUser.php"><?php session_start();
                 echo  $_SESSION["user_name"];?></a>
                <a href="#">Support</a>
            </section>
            <a class="logo1" href="index_user.php"></a>
            <a class="logo2" href="index_user.php"></a>
        </header>
        <nav>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link" href="index_user.php">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="trainingsLayout.php">Trainings</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Facilities</a>
                </li>
            </ul>
        </nav>
        <ul class="breadcrumb">
            <li><a href="index_user.php">Home</a></li>
            <li><a href="trainingsLayout.php">Trainings</a></li>
            <li><a href="myTrainingsLayout.php">My trainings</a></li>
            <li class="currentPage">Training by time</li>
        </ul>
        <main>
            <a href="#" class="list-group-item list-group-item-action">Trainings that come from JSON</a>
            <a href="#" class="list-group-item list-group-item-action">Trainings that come from JSON</a>
            <a href="#" class="list-group-item list-group-item-action">Trainings that come from JSON</a>
        </main>
    </div>
</body>

</html>