<?php 

// CONNECT TO THE SERVER
require 'reusables/connection.php';

// GET DATA FROM THE FORM
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$id = mysqli_escape_string($db, $request->id);
$pregledan = mysqli_escape_string($db, $request->pregledan);

$query = "UPDATE artikli SET pregledan='{$pregledan}' WHERE id = '{$id}'"; 
$result = mysqli_query($db, $query); 
// var_dump($result);


if ($result) {
  
  echo $result;
}

 ?>