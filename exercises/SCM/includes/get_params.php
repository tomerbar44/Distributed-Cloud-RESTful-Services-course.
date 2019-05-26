<!DOCTYPE html>
<html>

<head>
    <title>SCM</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body id="detailsSaveLayout">
    <div id="wrapper">
        <header>
            <section class="loginLine">
                <a href="#">Efrat</a>
                <a href="#">Support</a>
            </section>
            <a class="logo1" href="#"></a>
            <a class="logo2" href="#"></a>
        </header>
        <nav>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link" href="../index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Report</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="../facilitysLayout.html">Facilities</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Subscribers</a>
                </li>
            </ul>
        </nav>
        <ul class="breadcrumb">
            <li><a href="../index.html">Home</a></li>
            <li><a href="../facilitysLayout.html">Facilities</a></li>
            <li><a href="../formLayout.html">Add a facility</a></li>
            <li class="currentPage">Details saved</li>
        </ul>
        <main>
        <?php
        $uname=$_GET["name"];
        $ucode=$_GET["code"];
        $unum=$_GET["number"];
        $upro=$_GET["provider"];
        $udate=$_GET["date"];
        $ucomm=$_GET["comments"];
            echo "<table class=table>
                <thead>
                    <tr>
                        <th scope=col></th>
                        <th scope=col>Name</th>
                        <th scope=col>Code</th>
                        <th scope=col>Number</th>
                        <th scope=col>Provider</th>
                        <th scope=col>Date</th>
                        <th scope=col>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope=row>1</th>
                        <td>". $uname ."</td>
                        <td>". $ucode ."</td>
                        <td>". $unum ."</td>
                        <td>". $upro ."</td>
                        <td>". $udate ."</td>
                        <td>". $ucomm ."</td>
                    </tr>
                </tbody>
            </table>";
        ?>
        </main>
    </div>   
</body>
</html>