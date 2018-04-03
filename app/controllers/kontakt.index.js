app.controller('kontakt', ['$scope', 'DB', function($scope, DB) {
  
  // ADD MAP
  $scope.cities = [
    {
      city : 'A-Solar',
      desc : 'Bosanska Otoka',
      lat : 44.958395,
      long : 16.177150
    }
  ];
  
  var mapOptions = {
      zoom: 17,
      center: new google.maps.LatLng(44.958515,16.178958),
      mapTypeId: google.maps.MapTypeId.TERRAIN
  }

  $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

  $scope.markers = [];

  var infoWindow = new google.maps.InfoWindow();

  var createMarker = function (info){

      var marker = new google.maps.Marker({
          map: $scope.map,
          position: new google.maps.LatLng(info.lat, info.long),
          title: info.city
      });
      marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

      google.maps.event.addListener(marker, 'click', function(){
          infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
          infoWindow.open($scope.map, marker);
      });

      $scope.markers.push(marker);

  }  

  for (i = 0; i < $scope.cities.length; i++){
      createMarker($scope.cities[i]);
  }

  $scope.openInfoWindow = function(e, selectedMarker){
      e.preventDefault();
      google.maps.event.trigger(selectedMarker, 'click');
  }
   
  // SEND EMAIL
  $scope.emailSubmited = false;
  $scope.showEmailSuccessMsg = false;
  
  $scope.sendEmail = function() {
    $scope.emailSubmited = true;
    
    DB.sendEmail($scope.emailFormData).then(function(response) {
      if (response === 'success') {
        $scope.emailSubmited = false; // hide laoding btn
        $scope.showEmailSuccessMsg = true; // show success msg
        $scope.emailFormData = {}; //empty inputs
      }
    })
  }

  // GET CONTACT INFO
  DB.getContactInfo().then(function(info) {
    $scope.info = info[0];
  })
}])