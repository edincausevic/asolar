<?php 

// CONNECT TO THE SERVER
require 'reusables/connection.php';

// GET DATA FROM THE FORM
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$password = mysqli_escape_string($db, $request->password);

$query = "UPDATE korisnik SET password='{$password}'"; 
$result = mysqli_query($db, $query); 

if ($result) {

  echo $result;
}

 ?>