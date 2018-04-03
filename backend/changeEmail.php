<?php 

// CONNECT TO THE SERVER
require 'reusables/connection.php';

// GET DATA FROM THE FORM
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$email = mysqli_escape_string($db, $request->email);

$query = "UPDATE korisnik SET email='{$email}'"; 
$result = mysqli_query($db, $query); 

if ($result) {

  echo $result;
}

 ?>