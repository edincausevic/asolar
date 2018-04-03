<?php 
session_start();
session_destroy();
header("Location: http://localhost/albin-asolar/login.html");
?>