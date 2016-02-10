angular.module('MagicMirror', ['angularMoment']);

angular.module('MagicMirror')
.controller('mainController', ['$scope', 'weatherService', function($scope, weatherService) {
    'use strict';
    console.log('Here');
    $scope.yourName = 'Grímur';
    $scope.date = new Date();

    console.log('Getting weather');
    weatherService.getWeather().then(function(data) {
        $scope.weather = data;
    });
    console.log($scope.weather);
}]);
