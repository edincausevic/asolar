<?php 

// CONNECT TO THE SERVER
require 'reusables/connection.php';

$query = "SELECT * FROM artikli_menu"; 
$result = mysqli_query($db, $query); 
$artikliMenu = array();
$artikli = array();
$data = array();

if (mysqli_num_rows($result) >= 1) {
  
  while($row = mysqli_fetch_assoc($result)) {
    $artikliMenu[] = $row;
  }

  $query = "SELECT * FROM  artikli"; 
  $result = mysqli_query($db, $query); 

  while($row = mysqli_fetch_assoc($result)) {
    $artikli[] = $row;
  }

  $data = array("menu" => $artikliMenu, "artikli" => $artikli);
  echo json_encode($data);
}else {
  echo 'error';
}

 ?>