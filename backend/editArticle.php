<?php 


// CONNECT TO THE SERVER
require 'reusables/connection.php';

$id = $_POST['id']; 
$ime = $_POST['ime']; 
$kratkiOpis = $_POST['kratki-opis']; 
$opis = $_POST['opis']; 
$cijena = $_POST['cijena']; 

if (basename($_FILES["slika"]["name"])) {
  $target_dir = "uploads/";
  $target_file = $target_dir . basename($_FILES["slika"]["name"]);
  $ime_slike = basename($_FILES["slika"]["name"]);

  // Check if image file is a actual image or fake image
  if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["slika"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
  }

  if (move_uploaded_file($_FILES["slika"]["tmp_name"], $target_file)) {
    
    $query = "UPDATE artikli SET ime='{$ime}', slika='{$ime_slike}', kratki_opis='{$kratkiOpis}', opis='{$opis}', cijena='{$cijena}' WHERE id = '{$id}'"; 
    $result = mysqli_query($db, $query); 
    //var_dump($result);
  
    if ($result) { header("Location: http://localhost/albin-asolar/admin.php"); }
  } else {
    echo "Sorry, there was an error uploading your file.";
  }

  
}else {
  // slika nije uplodana
  $query = "UPDATE artikli SET ime='{$ime}', kratki_opis='{$kratkiOpis}', opis='{$opis}', cijena='{$cijena}' WHERE id = '{$id}'"; 
    $result = mysqli_query($db, $query); 
    //var_dump($result);
  
    if ($result) { header("Location: http://localhost/albin-asolar/admin.php"); }
}





 ?>