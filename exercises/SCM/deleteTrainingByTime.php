<?php
//get data from our from and insert to the table
include 'db.php';
session_start();
$utime = $_GET["dtime"];
$id = $_SESSION["user_id"];
$query = "DELETE FROM tb_training_210 WHERE ID=$id AND time='$utime' ";
$result = mysqli_query($connection, $query);
if (!$result) {
    die("DB query failed.");
}
?>

<!DOCTYPE html>
<html>

<head>
    <title>SCM</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="includes/style.css">
</head>

<body id="formLayout">
    <div id="wrapper">

        <header>
            <section class="loginLine">
                <a href="informationUser.php"><?php
                                                echo  $_SESSION["user_name"]; ?></a>
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
            <li class="currentPage">Deleting training</li>

        </ul>

        <main>
            <?php
             echo "<h3 class='confirmMessage'>Training in: ". $utime." successfully deleted !</h3>";
            ?>
        </main>

        

    </div>
</body>

</html>
<?php
//close DB connection
mysqli_close($connection);
?>