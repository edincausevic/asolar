<?php 

// CONNECT TO THE SERVER
require 'reusables/connection.php';

// GET DATA FROM THE FORM
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$menuName = mysqli_escape_string($db, $request->menuName);

$query = "SELECT id FROM artikli_menu WHERE route = '{$menuName}'"; 
$result = mysqli_query($db, $query); 

if ($row = mysqli_fetch_array($result))
{
  $menuID = $row['id'];

  $query = "SELECT * FROM artikli WHERE menu_id = '{$menuID}'"; 
  $result = mysqli_query($db, $query); 
  $artikli = array();

  while($row = mysqli_fetch_assoc($result)) {
    $artikli[] = $row;
  }
  echo json_encode($artikli);
}
 ?>