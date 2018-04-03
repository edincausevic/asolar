<?php 

// CONNECT TO THE SERVER
require 'reusables/connection.php';

$query = "SELECT * FROM korisnik"; 
$result = mysqli_query($db, $query); 

if ($row = mysqli_fetch_array($result))
{

  $contactData[] = array('email' => $row['email'], 'broj_telefona' => $row['broj_telefona']);
  echo json_encode($contactData);
}

 ?>