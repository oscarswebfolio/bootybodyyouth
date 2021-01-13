<?php

    $host = "localhost";
    $username = "boothbng_bootybodyyouth";
    $password = "BBY1993x)";
    $DBname = "boothbng_messages";

    $DBconnect = new mysqli($host, $username, $password, $DBname);

    if ($DBconnect->connect_error) {
        die("Connection Failed" . $DBconnect_connect_error);
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
  

    $sql = "INSERT INTO messages (name, email, phone, message)
    VALUES ('$name', '$email', '$phone', '$message')";

    $results = mysqli_query($DBconnect, $sql);

    if (!$results) {
        die('Query not sent');
    }
    header("Location: thanks.php");
?>