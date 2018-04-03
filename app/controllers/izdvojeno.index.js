app.controller('izdvojeno', ['$scope', '$location', 'DB', function($scope, $location, DB) {
  
  $scope.loaderVisibility = false;

  DB.getIzdvojeno().then(function(response) {
    
    $scope.artikli = response;
    $scope.loaderVisibility = true;
  })

  $scope.showArticle = function(id) {
    $location.path($location.path() + '/' + id);
  }
}])