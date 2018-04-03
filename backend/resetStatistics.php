<?php 

// CONNECT TO THE SERVER
require 'reusables/connection.php';


$queryMenu = "UPDATE artikli_menu SET pregledan = 0"; 
$resultMenu = mysqli_query($db, $queryMenu); 


if ($resultMenu) {

  $queryArtikli = "UPDATE artikli SET pregledan = 0"; 
  $resultArtikli = mysqli_query($db, $queryArtikli); 

  if ($resultArtikli) {
    echo $result;
  }
  
}