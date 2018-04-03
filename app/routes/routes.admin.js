app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  
  // fixs slash - from ( !#%2 to / )
  $locationProvider.hashPrefix('');
  
  $routeProvider
  
  .when('/', {
    templateUrl: 'app/views/servis.html',
    controller: 'servisCtrl'
  })
  
  .when('/statistike', {
    templateUrl: 'app/views/statistike.html'  
  })
  
  .when('/profil', {
    templateUrl: 'app/views/profil.html',
    controller: 'profil'      
  })

}])