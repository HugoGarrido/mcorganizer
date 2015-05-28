'use strict';

describe('Controller: AdminDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('mcorganizerApp'));

  var AdminDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminDetailCtrl = $controller('AdminDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
