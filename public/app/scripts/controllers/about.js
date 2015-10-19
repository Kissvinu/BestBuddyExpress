'use strict';

/**
 * @ngdoc function
 * @name bestbuddyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bestbuddyApp
 */
angular.module('bestbuddyApp')
  .controller('AboutCtrl', function ($scope,$routeParams,$http,_,databaseservice) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.boxClass = true;
    $scope.hideFooter=false;
   databaseservice.getDataUserData().then(function(response){
        $scope.data=response.data;
        var data = _.where($scope.data.data,{'name':$routeParams.id});
        $scope.data = _.filter($scope.data.data,function(item){
            if(item.name!==$routeParams.id){
                return item;
            }
            else{
                return false;
            }
        });
        $scope.myStyle=data.length>0?data[0].data.picture:'';
        $scope.name=data.length>0?data[0].name:'';
        console.log($scope.name);
   });
    $scope.first=1;
    $scope.last=2;
    $scope.change = function(){
    	$scope.first=(Math.ceil($scope.data.length/2)===$scope.first)?1:$scope.first+1;
    	$scope.last=(Math.ceil($scope.data.length/2)===$scope.last)?1:$scope.last+1;
    	
    };

  });
