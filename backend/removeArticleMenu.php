<?php 

// CONNECT TO THE SERVER
require 'reusables/connection.php';

// GET DATA FROM THE FORM
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$id = mysqli_escape_string($db, $request->id);


$query = "DELETE FROM artikli_menu WHERE id = '{$id}'"; 
$result = mysqli_query($db, $query); 


if ($result) {

  $queryArticle = "DELETE FROM artikli WHERE menu_id = '{$id}'"; 
  $resultArticle = mysqli_query($db, $queryArticle); 

  if ($resultArticle) {
    echo $resultArticle;
  }

}

 ?>