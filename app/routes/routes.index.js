app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  
  // fixs slash - from ( !#%2 to / )
  $locationProvider.hashPrefix('');
  
  $routeProvider
  
  .when('/', {
    templateUrl: 'app/views/naslovna.html',
    controller: 'naslovna'
  })
  
  .when('/izdvojeno', {
    templateUrl: 'app/views/izdvojeno.html',
    controller: 'izdvojeno'      
  })

  .when('/izdvojeno/:id', {
    templateUrl: 'app/views/artikl.html',
    controller: 'artikl'      
  })
  
  .when('/o-nama', {
    templateUrl: 'app/views/o-nama.html'      
  })
  
  .when('/kontakt', {
    templateUrl: 'app/views/kontakt.html',
    controller: 'kontakt'
  })
  
  .when('/artikli/:artikl', {
    templateUrl: 'app/views/artikli.html',
    controller: 'artikli'
  })

  .when('/artikli/:artikl/:id', {
    templateUrl: 'app/views/artikl.html',
    controller: 'artikl'
  })
  
}])