'use strict';

/**
 * @ngdoc function
 * @name bestbuddyApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the bestbuddyApp
 */
angular.module('bestbuddyApp').controller('LoginCtrl', function ($scope,databaseservice,_,$location) {
  	 $scope.submit = function(row) {
     databaseservice.getDataUserData().then(function(response){
       $scope.data=response.data;
        var data = _.where($scope.data.data,{'Emailid':row.username,'password':row.password});
         if(data.length>0){
         	$location.path('/about/'+data[0].name);
         }
     });
  	 };
  });
