<?php

// OPEN DB CONNECTION
$db = new mysqli('localhost', 'root', '', 'asolar');
// TEST IF CONNECTION OCCURRED
if($db->connect_error) {
	die('Sorry, we have some problems!');
}


?>