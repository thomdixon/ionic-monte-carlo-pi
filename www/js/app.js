// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('MonteCarlo', function($scope) {
  function getRandomPoint(radius) {
    return {
      x: Math.random()*2*radius,
      y: Math.random()*2*radius
    }
  }

  function pointIsInsideCircle(point, radius) {
    var x = point.x / 2;
    var y = point.y / 2;
    return Math.sqrt(x*x + y*y) < radius;
  }

  $scope.step = function (n) {
    var simulation = document.getElementById('simulation');
    var ctx = simulation.getContext('2d');

    for (var i = 0; i < n; i++) {
      var point = getRandomPoint(150);
      $scope.totalPoints++;
      if (pointIsInsideCircle(point, 150)) {
        $scope.pointsInside++;
      }

      ctx.beginPath();
      ctx.arc(point.x, point.y, 1, 0, Math.PI*2);
      ctx.stroke();
    }
  };

  $scope.reset = function () {
    $scope.totalPoints = 0;
    $scope.pointsInside = 0;

    var simulation = document.getElementById('simulation');
    var ctx = simulation.getContext('2d');
    ctx.clearRect(0, 0, 300, 300);
    ctx.beginPath();
    ctx.arc(150, 150, 150, 0, Math.PI*2);
    ctx.stroke();
  };

  $scope.reset();
})
