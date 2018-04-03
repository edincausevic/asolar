
app.controller('statistike', ['$scope', 'DB', function($scope, DB) {
  
  
  DB.getData().then(function(data) {

    // menu stats
    var menuNames = [];
    var menuViews = [];
    data.menu.forEach(function(menu) {
      menuNames.push(menu.ime);
      menuViews.push(menu.pregledan)
    })

    $scope.labelsMenu = menuNames;
    $scope.dataMenu = menuViews;

    //article stats
    var artikliNames = [];
    var artikliViews = [];
    data.artikli.forEach(function(menu) {
      artikliNames.push(menu.ime);
      artikliViews.push(menu.pregledan)
    })

    $scope.labelsArtikli = artikliNames;
    $scope.dataArtikli = artikliViews;
  })

  $scope.resetStatistics = function() {
    if ( confirm('Resetuj sve statistike? Sve ce biti 0!!') ) {
      DB.resetStatistics().then(function(response) {
        location.reload();
      })
    }
  } 
    
  
 
}])

