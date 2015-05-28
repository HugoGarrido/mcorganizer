'use strict';

/**
 * @ngdoc overview
 * @name mcorganizerApp
 * @description
 * # mcorganizerApp
 *
 * Main module of the application.
 */
angular
  .module('mcorganizerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'xml'
  ])

  .config(function ($routeProvider, $httpProvider, x2jsProvider) {

    $httpProvider.interceptors.push('xmlHttpInterceptor');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl'
      })
<<<<<<< Updated upstream
=======
      .when('/admin/:imacId', {
        templateUrl: 'views/admin-detail.html',
        controller: 'AdminDetailCtrl'
      })
>>>>>>> Stashed changes
      .otherwise({
        redirectTo: '/'
      });

    x2jsProvider.config = {
      attributePrefix : null
      /*
       escapeMode               : true|false - Escaping XML characters. Default is true from v1.1.0+
       attributePrefix          : "<string>" - Prefix for XML attributes in JSon model. Default is "_"
       arrayAccessForm          : "none"|"property" - The array access form (none|property). Use this property if you want X2JS generates an additional property <element>_asArray to access in array form for any XML element. Default is none from v1.1.0+
       emptyNodeForm            : "text"|"object" - Handling empty nodes (text|object) mode. When X2JS found empty node like <test></test> it will be transformed to test : '' for 'text' mode, or to Object for 'object' mode. Default is 'text'
       enableToStringFunc       : true|false - Enable/disable an auxiliary function in generated JSON objects to print text nodes with text/cdata. Default is true
       arrayAccessFormPaths     : [] - Array access paths. Use this option to configure paths to XML elements always in "array form". You can configure beforehand paths to all your array elements based on XSD or your knowledge. Every path could be a simple string (like 'parent.child1.child2'), a regex (like /.*\.child2/), or a custom function. Default is empty
       skipEmptyTextNodesForObj : true|false - Skip empty text tags for nodes with children. Default is true.
       stripWhitespaces         : true|false - Strip whitespaces (trimming text nodes). Default is true.
       datetimeAccessFormPaths  : [] - Datetime access paths. Use this option to configure paths to XML elements for "datetime form". You can configure beforehand paths to all your array elements based on XSD or your knowledge. Every path could be a simple string (like 'parent.child1.child2'), a regex (like /.*\.child2/), or a custom function. Default is empty
       */
    };

  });
