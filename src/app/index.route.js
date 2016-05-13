(function() {
  'use strict';

  angular
    .module('fakturownikFront')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/info', {
        templateUrl: 'app/info/info.html',
        controller: 'InfoController',
        controllerAs: 'info'
      })
      .when('/', {
        templateUrl: 'app/invoice/invoice.html',
        controller: 'InvoiceController',
        controllerAs: 'invoice'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
