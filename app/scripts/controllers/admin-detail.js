'use strict';

/**
 * @ngdoc function
 * @name mcorganizerApp.controller:AdminDetailCtrl
 * @description
 * # AdminDetailCtrl
 * Controller of the mcorganizerApp
 */
angular.module('mcorganizerApp')

  .controller('AdminDetailCtrl', function ($http, $route, $scope ) {

   var param = $route.current.params.imacId;
   console.log(param);
   $http.get('data/'+param+'.xml')
     .success(function(data){
     $scope.imac = data.track;
     })
     .error(function(){
       console.log('Impossible');
     });

    console.log($scope);

  });



