app.controller('mainCtrl', ['$scope', '$location', 'DB', function($scope, $location, DB) {
  
  $scope.state = {
    toggleMobMenu: false
  }
  
  $scope.$on('$routeChangeStart', function() {
  $scope.page = $location.path();
  })
  
  $scope.toggleMobMenu = function() {
    $scope.state.toggleMobMenu = !$scope.state.toggleMobMenu;
  }
 
  DB.getMenuElms().then(function(menuList) {
    $scope.menuElms = menuList;
  })

  $scope.setNumOfViews = function(id, pregledan) {
    var incrementPregled = {
      id: id,
      pregledan: parseInt(pregledan) + 1
    }
   
    DB.setNumOfViews(incrementPregled).then(function(response) {})
  }

}])