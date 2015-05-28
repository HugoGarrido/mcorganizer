'use strict';

/**
 * @ngdoc function
 * @name mcorganizerApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the mcorganizerApp
 */
angular
	.module('mcorganizerApp')
  	.controller('MapCtrl', function ($scope, $http) {
  		$scope.test = "salut";
    	
    	$http.get('data/imac1.xml').success(function (data) {
	    	$scope.imac1 = data.track;
	    });
	    
	    //console.log($scope.imac1);
	    
	    $http.get('data/imac2.xml').success(function (data) {
	      	$scope.imac2 = data.track;
	    });
	    
	    $http.get('data/imac3.xml').success(function (data) {
	      $scope.imac3 = data.track;
	    });

	    //console.log('Scope : ', $scope.imac1);
  	});
