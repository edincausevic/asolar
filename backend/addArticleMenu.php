<?php 

// CONNECT TO THE SERVER
require 'reusables/connection.php';

// GET DATA FROM THE FORM
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$ime = mysqli_escape_string($db, $request->ime);
$route = mysqli_escape_string($db, $request->route);

$query = "INSERT INTO artikli_menu (ime, route) VALUES ('{$ime}','{$route}')"; 
$result = mysqli_query($db, $query); 
// var_dump($result);


if ($result) {
  
  $last_id = mysqli_insert_id($db);
  echo $last_id;
}

 ?>