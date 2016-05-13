(function() {
  'use strict';

  angular
    .module('fakturownikFront')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(pdfMakeService, $window) {
      var vm = this;
      vm.getPdf = function() {
        pdfMakeService.download();
      };
      vm.print = function() {
        $window.print();
      };
    }
  }

})();
