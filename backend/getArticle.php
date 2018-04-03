<?php 

// CONNECT TO THE SERVER
require 'reusables/connection.php';

// GET DATA FROM THE FORM
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$id = mysqli_escape_string($db, $request->id);

$query = "SELECT * FROM artikli WHERE id = '{$id}'"; 
$result = mysqli_query($db, $query); 

if ($row = mysqli_fetch_array($result))
{
  
  $queryUser = "SELECT broj_telefona FROM korisnik"; 
  $resultUser = mysqli_query($db, $queryUser); 
  $rowUser = mysqli_fetch_array($resultUser);

  $artikl[] = array('cijena'=> $row['cijena'], 'ime'=> $row['ime'], 'kratki_opis'=> $row['kratki_opis'], 'opis'=> $row['opis'], 'pregledan'=> $row['pregledan'], 'slika'=> $row['slika'], 'id'=> $row['id'], 'broj_telefona'=> $rowUser['broj_telefona']);
  echo json_encode($artikl);
}

 ?>