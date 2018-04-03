app.controller('profil', ['$scope', 'DB', '$timeout', function($scope, DB, $timeout) {
  
  $scope.state = {
    usernameChanged: false,
    newUsername: '',
    passwordChanged: false,
    newPassword: '',
    emailChanged: false,
    newPhoneNum: '',
    phoneNumChanged: false,
    newEmail: ''
  }

  $scope.changeUsername = function() {
    DB.changeUsername($scope.state.newUsername).then(function(response) {
      if(response == 1) { 
        $scope.state.usernameChanged = true; 
        $scope.state.newUsername = ''; 
        $scope.hideSuccessIcons();
      }
    })
  }

  $scope.changePassword = function() {
    DB.changePassword($scope.state.newPassword).then(function(response) {
      if(response == 1) { 
        $scope.state.passwordChanged = true; 
        $scope.state.newPassword = ''; 
        $scope.hideSuccessIcons();
      }
    })
  }

  $scope.changeEmail = function() {
    DB.changeEmail($scope.state.newEmail).then(function(response) {
      if(response == 1) { 
        $scope.state.emailChanged = true; 
        $scope.state.newEmail = ''; 
        $scope.hideSuccessIcons();
      }
    })
  }

  $scope.cahngePhoneNum = function() {
    DB.cahngePhoneNum($scope.state.newPhoneNum).then(function(response) {

      if(response == 1) { 
        $scope.state.phoneNumChanged = true; 
        $scope.state.newPhoneNum = ''; 
        $scope.hideSuccessIcons();
      }
    })
  }

  // hide success icons
  $scope.hideSuccessIcons = function() {
    $timeout(function() {
      $scope.state.usernameChanged = false;
      $scope.state.passwordChanged = false;
      $scope.state.emailChanged = false; 
      $scope.state.phoneNumChanged = false;
    },1000);
  }
}]);

