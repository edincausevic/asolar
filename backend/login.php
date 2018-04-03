<?php 

//error_reporting(0);
session_start();

// CONNECT TO THE SERVER
require 'reusables/connection.php';


// GET DATA FROM THE FORM
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$username = mysqli_escape_string($db, $request->username);
$password = mysqli_escape_string($db, $request->password);


$query = "SELECT * FROM korisnik WHERE username='$username' AND password='$password'"; 
$result = mysqli_query($db, $query); 
//var_dump(mysqli_fetch_assoc($result));

if (mysqli_num_rows($result) >= 1) {
  while($row = mysqli_fetch_assoc($result)) {
    $_SESSION['user_is_loggedin'] = $row['id'];
    echo true;
  }
}else {
  echo 'error';
}

 ?>