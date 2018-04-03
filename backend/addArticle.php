


 <?php 

$random_str = md5(rand(1, 69));

// CONNECT TO THE SERVER
require 'reusables/connection.php';

$ime = $_POST['ime']; 
$kratkiOpis = $_POST['kratki-opis']; 
$opis = $_POST['opis']; 
$cijena = $_POST['cijena']; 
$menuID = $_POST['menuID']; 

$target_dir = "uploads/";
$target_file = $target_dir . $random_str . ".jpg";
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
  echo "The file ". basename( $_FILES["slika"]["name"]). " has been uploaded.";
} else {
  echo "Sorry, there was an error uploading your file.";
}
$slika = $random_str . '.jpg';
$query = "INSERT INTO artikli (menu_id, ime, slika, kratki_opis, opis, cijena) VALUES ('{$menuID}','{$ime}','{$slika}','{$kratkiOpis}','{$opis}','{$cijena}')"; 
$result = mysqli_query($db, $query);

if ($result) {
  header("Location: http://localhost/albin-asolar/admin.php");
}

?>