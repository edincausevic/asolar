<?php 

// CONNECT TO THE SERVER
require 'reusables/connection.php';

// GET DATA FROM THE FORM
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$newPhoneNum = mysqli_escape_string($db, $request->newPhoneNum);

$query = "UPDATE korisnik SET broj_telefona='{$newPhoneNum}'"; 
$result = mysqli_query($db, $query); 

if ($result) {

  echo $result;
}

 ?>