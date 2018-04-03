app.controller('artikli', ['$scope', '$routeParams', '$location', 'DB', function($scope, $routeParams, $location, DB) {
  
  $scope.title = $routeParams.artikl.replace(/-/g, ' ');
  $scope.loaderVisibility = false;

  DB.getArticles($routeParams.artikl).then(function(response) {
    $scope.artikli = response;
    $scope.loaderVisibility = true;
  })

  $scope.showArticle = function(id, pregledan) {
    var artikl = {
      id: id,
      pregledan: parseInt(pregledan) + 1
    }
    DB.artiklRating(artikl).then(function(response) {
      $location.path($location.path() + '/' + artikl.id);
    })
    
  }
}])
