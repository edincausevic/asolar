<?php 

// CONNECT TO THE SERVER
require 'reusables/connection.php';

$query = "SELECT * FROM artikli WHERE izdvojeno = 1"; 
$result = mysqli_query($db, $query); 


if (mysqli_num_rows($result) >= 1) {

  while($row = mysqli_fetch_assoc($result)) {
    $artikli[] = $row;
  }

  echo json_encode($artikli);
}

 ?>