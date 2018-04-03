app.controller('naslovna', ['$scope', '$interval', function($scope, $interval) {

  $scope.carousel = {
    active: 1,
    increment: 1,
    time: 5000,
    pause: false,
    navElms: [
      {imageNum: 1},
      {imageNum: 2},
      {imageNum: 3}
    ],
    slideText: [
      {
        title: 'Solarni paneli i regulatori',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tempora voluptatum nam itaque delectus optio quaerat mollitia, numquam nisi quas magni, doloribus voluptates nesciunt veritatis earum?'
      },
      {
        title: 'Led sijelice',
        text: 'Awd sit, amet consectetur adipisicing elit. Officiis tempora voluptatum nam itaque delectus optio quaerat mollitia, numquam nisi quas magni, doloribus voluptates nesciunt veritatis earum?'
      },
      {
        title: 'Wifi kamere',
        text: 'For sit, amet consectetur adipisicing elit. Officiis tempora voluptatum nam itaque delectus optio quaerat mollitia, numquam nisi quas magni, doloribus voluptates nesciunt veritatis earum?'
      },
    ]
  }
  
  
  $interval(function() {
    if ($scope.carousel.pause === false) {
      if ($scope.carousel.active === 3) $scope.carousel.active = 0;
      $scope.carousel.active = $scope.carousel.active + $scope.carousel.increment;
    }
  }, $scope.carousel.time);
  
  $scope.carouselPause = function() {$scope.carousel.pause = true;}
  $scope.carouselContinue = function() {$scope.carousel.pause = false;}
  $scope.changeSlide = function(slideNum) {
    $scope.carousel.active = slideNum;
  }
}])