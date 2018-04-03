<?php


// CONNECT TO THE SERVER
require 'reusables/connection.php';


  $post_data = file_get_contents("php://input");
  $data = json_decode($post_data);

  // save input values
  $title = $data->name;
  $email = $data->email;
  $msg = $data->text;

  
  $query = "SELECT * FROM korisnik"; 
  $result = mysqli_query($db, $query); 

  while($row = mysqli_fetch_assoc($result)) {

    // setup email info
    $to      = $row["email"];
    $message = "Title: " . $title . "\r\n From: " . $email . "\r\n\r\n" . $msg;
    $headers = 'From: l-mail@listuin.com' . "\r\n" .
        'Reply-To: webmaster@example.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // Send email
    $send = mail($to, $title, $message, $headers);

    // check if email is send or not
    if ( $send ) {
        echo 'success';
    }else {
        echo 'error';
    }
    }
?>