<?php
//get data from DB
include 'db.php';
session_start();
$count = 1;
$id = $_SESSION["user_id"];
$query = "SELECT * FROM tb_training_210 WHERE ID=$id";
$result = mysqli_query($connection, $query);
if (!$result) {
    die("DB query failed.");
}
?>

<!DOCTYPE html>
<html>

<head>
    <title>SCM</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="includes/style.css">
</head>

<body id="myTrainingsLayout">
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
            <li class="currentPage">My trainings</li>
        </ul>
        <main>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col"><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal">I'm late!</button></th>
                        <th scope="col"><button type="button" class="closeBtn" data-toggle="modal" data-target="#confirmationDelete"><img src="https://img.icons8.com/ios-glyphs/30/000000/delete-forever.png"></button></th>
                        <th scope="col">Training</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Minutes</th>
                        <th scope="col">Level</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    //use return data (if any)
                    while ($row = mysqli_fetch_assoc($result)) { //returns standard array of results. keys are ints
                        echo "<tr>
                    <td></td>
                    <th scope='row'>" . $count . "</th>
                    <td>" . $row["traning_name"] . "</td>
                    <td>" . $row["date"] . "</td>
                    <td>" . $row["time"] . "</td>
                    <td>" . $row["minutes"] . "</td>
                    <td>" . $row["level"] . "</td>
                    </tr>";
                        $count++;
                    }
                    ?>
                </tbody>
                <?php
                //release returned data
                mysqli_free_result($result);
                ?>
            </table>
            <div class="modal fade" id="confirmationDelete">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">Select training time you want to delete</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <form action="deleteTrainingByTime.php" method="GET">
                            <div class="modal-body">
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Time</label>
                                    <div class="col-sm-10">
                                        <input type="time" class="form-control" name="dtime" required>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <input type="submit" class="btn btn-danger" value="Delete">
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">Select training time</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <!-- Modal body -->
                        <form action="trainingsForLate.php" method="GET">
                            <div class="modal-body">
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Date</label>
                                    <div class="col-sm-10">
                                        <input type="date" class="form-control" name="date" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Time</label>
                                    <div class="col-sm-10">
                                        <input type="time" class="form-control" name="time" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Level</label>
                                    <div class="col-sm-10">
                                        <select class="form-control" name="level" required>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <!-- Modal footer -->
                            <div class="modal-footer">
                                <input type="submit" class="btn btn-success" value="Sumbit">
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </main>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

</body>

</html>
<?php
//close DB connection
mysqli_close($connection);
?>