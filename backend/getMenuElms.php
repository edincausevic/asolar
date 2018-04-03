<?php 

// CONNECT TO THE SERVER
require 'reusables/connection.php';

$query = "SELECT * FROM artikli_menu"; 
$result = mysqli_query($db, $query); 
//var_dump(mysqli_fetch_assoc($result));
$artikliMenu = array();

if (mysqli_num_rows($result) >= 1) {
  
  while($row = mysqli_fetch_assoc($result)) {
    $artikliMenu[] = $row;
  }
  echo json_encode($artikliMenu);
}else {
  echo 'error';
}

 ?>