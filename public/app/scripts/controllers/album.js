'use strict';

/**
 * @ngdoc function
 * @name bestbuddyApp.controller:AlbumCtrl
 * @description
 * # AlbumCtrl
 * Controller of the bestbuddyApp
 */
angular.module('bestbuddyApp')
  .controller('AlbumCtrl', function ($scope,databaseservice) {
databaseservice.getDataUserData().then(function(response){
        $scope.data=response.data;
   });
  });
