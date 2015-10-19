'use strict';

/**
 * @ngdoc function
 * @name bestbuddyApp.controller:TimelineCtrl
 * @description
 * # TimelineCtrl
 * Controller of the bestbuddyApp
 */
angular.module('bestbuddyApp')
  .controller('TimelineCtrl', function ($scope,$routeParams,$http,_,databaseservice) {
  	var name='vinu';
        $scope.joiningdate='Today';
     databaseservice.getDataUserData().then(function(response){
        $scope.data=response.data;
        var data = _.where($scope.data.data,{'name':'vinu'});
         $scope.joiningdate=data[0].joiningdate;
         $scope.pic=data[0].data.picture;
   });
  });
