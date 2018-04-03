app.controller('loginCtrl', ['$scope', '$location', 'DB', function($scope, $location, DB) {
  
  $scope.state = {
    loginErrorMsg: false,
    retriveUserPassMsg: false,
    email: '',
    loadingSpinnerVisibility: false
  };

  $scope.login = function() {
    $scope.state.loadingSpinnerVisibility = true;
    DB.login($scope.loginData).then(function(response) {
      if(response == 'error') {
        $scope.state.loginErrorMsg = true;
        $scope.state.loadingSpinnerVisibility = false;

      }else if (response == 1) {
        window.location.pathname = '/albin-asolar/admin.php'; 
      }
    })
  }

  $scope.sendUserAndPassToEmail = function() {
    DB.forgetUserPass().then(function(response) {
      $scope.state.retriveUserPassMsg = true;
      $scope.state.email = response;
    })
  }
}])