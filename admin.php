<?php 
session_start();
if(!isset($_SESSION['user_is_loggedin'])){ 
  header("Location: http://localhost/albin-asolar/login.html"); 
}
?>
<!DOCTYPE html>
<html lang="en" ng-app="admin">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Admin</title>
  <link rel="stylesheet" href="assets/css/font-awesome.min.css">
  <link rel="stylesheet" href="assets/css/admin.styles.css">
</head>
<body ng-controller="adminCtrl">
  <div class="admin u-clearfix">

    <div class="admin__nav">
      <ul class="admin__nav-elems">
        <li class="admin__nav-el">
          <a href="#/" 
              class="btn btn--primary btn--blue"
              ng-class="{'btn--blue-active': route === '/'}">Servis</a>
        </li>
        <li class="admin__nav-el">
          <a href="#/statistike" 
              class="btn btn--primary btn--blue"
              ng-class="{'btn--blue-active': route === '/statistike'}">Statistike</a>
        </li>
        <li class="admin__nav-el">
          <a href="#/profil" 
              class="btn btn--primary btn--blue"
              ng-class="{'btn--blue-active': route === '/profil'}">Profil</a>
        </li>
        <li class="admin__nav-el">
          <a href="login.html" 
              ng-click="logout()"
              class="btn btn--primary btn--blue">Logout</a>
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="admin__content u-marginTop-small">
        <ng-view></ng-view>
      </div>
    </div>
  </div>

<!--ANGULARJS-->
<script src="assets/js/admin.min.js"></script>
<script src="node_modules/chart.js/dist/Chart.min.js"></script>
<script src="node_modules/angular-chart.js/dist/angular-chart.min.js"></script>
</body>
</html>