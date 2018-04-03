<?php

//error_reporting(0);
session_start();

// CONNECT TO THE SERVER
require 'reusables/connection.php';

$query = "SELECT * FROM korisnik"; 
$result = mysqli_query($db, $query); 


while($row = mysqli_fetch_assoc($result)) {

//setup email info
$to      = $row['email'];
$message = "Username: " . $row['username'] . "\r\n Password: " . $row['password'] ;
$headers = 'From: l-mail@listuin.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Send email
$send = mail($to, 'A-SOLAR Username i Password', $message, $headers);

// check if email is send or not
if ( $send ) {
    echo $row['email'];
}else {
    echo 'error';
}
  
}



?>