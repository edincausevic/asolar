<?php 

// CONNECT TO THE SERVER
require 'reusables/connection.php';

// GET DATA FROM THE FORM
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$username = mysqli_escape_string($db, $request->username);

$query = "UPDATE korisnik SET username='{$username}'"; 
$result = mysqli_query($db, $query); 

if ($result) {

  echo $result;
}

 ?>