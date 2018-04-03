app.controller('artikl', ['$scope', '$routeParams', 'DB', function($scope, $routeParams, DB) {
  
  $scope.loaderVisibility = false;

  DB.getArticle($routeParams.id).then(function(article) {

    $scope.article = article[0];
    $scope.loaderVisibility = true;
  });
}])