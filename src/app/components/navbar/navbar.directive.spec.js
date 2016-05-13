(function() {
  'use strict';

  /**
   */
  describe('directive navbar', function() {
    // var $window;
    var vm;
    var el;
    var timeInMs;

    beforeEach(module('fakturownikFront'));
    beforeEach(inject(function($compile, $rootScope) {
      // spyOn(_$window_, 'moment').and.callThrough();
      // $window = _$window_;

      el = angular.element('<navbar></navbar>');

      $compile(el)($rootScope.$new());
      $rootScope.$digest();
      vm = el.isolateScope().vm;
      // ctrl = el.controller('navbar');
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });

  });
})();
