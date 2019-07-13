<!DOCTYPE html>
<html>

<head>
    <title>SCM</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="includes/style.css">
</head>

<body id="detailsSaveLayout">
    <div id="wrapper">
        <header>
            <section class="loginLine">
                <a href="#"><?php session_start();
                            echo  $_SESSION["user_name"]; ?></a>
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
            <li><a href="facilitysLayout.php">Facilities</a></li>
            <li><a href="formLayout.php">Add a facility</a></li>
            <li class="currentPage">Details saved</li>
        </ul>
        <main>
            <?php
            include 'db.php';
            $uname = $_GET["name"];
            $ucode = $_GET["code"];
            if ($_GET["kind"] == "aerobic") {
                $unum = 1;
            } else {
                $unum = 0;
            }
            $upro = $_GET["provider"];
            $udate = $_GET["date"];
            $ucomm = $_GET["comments"];
            $uimg = $_GET["img"];

            $sql = "INSERT INTO tb_facilities_210 (ID, name, provider,date,comment,kind,img)
            VALUES ('$ucode', '$uname', '$upro','$udate','$ucomm','$unum','$uimg')";

            if (mysqli_query($connection, $sql)) {
                echo "<div class='card mb-3' style='max-width: 540px;'>
                <div class='row no-gutters'>
                    <div class='col-md-4'>
                        <img src='" . $uimg . "' class='card-img' alt=''>
                    </div>
                    <div class='col-md-8'>
                        <div class='card-body'>
                        <ul class='list-group list-group-flush'>
                        <li class='list-group-item'>" . $ucode . "</li>
                        <li class='list-group-item'>" . $uname . "</li>
                        <li class='list-group-item'>" . $upro . "</li>
                        <li class='list-group-item'>" . $udate . "</li>
                        <li class='list-group-item'>" . $ucomm . "</li>
                    </ul>
                      
                    </div>
                </div>
            </div>";
            } else {
                echo "Error: " . $sql . "<br>" . mysqli_error($connection);
            }

            mysqli_close($connection);
            ?>
        </main>
    </div>
</body>

</html>