'use strict';

/**
 * @ngdoc function
 * @name bestbuddyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bestbuddyApp
 */
var app=angular.module('bestbuddyApp');
  app.controller('MainCtrl', function ($scope,$http,$window) {
    $http.get('../app/Database/data.json').success(function (res) {
    	$scope.data=res;
    }).error(function (er) {
        $window.alert('e');
    });
  });
