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
            <li class="currentPage">Add a training</li>
        </ul>
        <main>
            <form action="trainingConfirmLayout.php" method="GET">
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">ID</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control"  name="id" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Training</label>
                    <div class="col-sm-10">
                        <select class="form-control" id="training" name="training"></select>
                    </div>
                </div>
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
                    <label class="col-sm-2 col-form-label">Minutes</label>
                    <div class="col-sm-10">
                        <select class="form-control" name="minutes">
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                        <option>50</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Level</label>
                    <div class="col-sm-10">
                        <select class="form-control" name="level">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                </div>
                <input type="submit" class="btn btn-dark" value="Sumbit">
                <span></span>
            </form>
        </main>
    </div>
  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="includes/jsDynamicFormT.js"></script>
</body>

</html>