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
            <li class="currentPage">My trainings</li>
        </ul>
        <main>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col"><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal">I'm late!</button></th>
                        <th scope="col">Training</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Minutes</th>
                        <th scope="col">Level</th>
                    </tr>
                </thead>
                <tbody>
                  
                </tbody>
            </table>
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
                                        <input type="date" class="form-control" id="date" name="date" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Time</label>
                                    <div class="col-sm-10">
                                        <input type="time" class="form-control" id="time" name="time" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Level</label>
                                    <div class="col-sm-10">
                                        <select class="form-control" id="duration" name="level" required>
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
    <script src="includes/jsMyTrainings.js"></script>
</body>

</html>