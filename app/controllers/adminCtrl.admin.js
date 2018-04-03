app.controller('adminCtrl', ['$scope', '$location', 'DB', function($scope, $location, DB) {
  
  
  $scope.$on('$routeChangeStart', function() {
    $scope.route = $location.path();
  })

  $scope.logout = function() {
    DB.logout();
    location.reload();
  }
}])