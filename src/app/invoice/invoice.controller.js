(function() {
  'use strict';

  angular
    .module('fakturownikFront')
    .controller('InvoiceController', InvoiceController);

  /** @ngInject */
  function InvoiceController($scope, invoiceService, number2Words) {
    var vm = this;

    vm.obj = invoiceService;

    $scope.$watch(function() {
      return vm.obj.total;
    }, function(val) {
      val = val || "0";
      vm.obj.totalInWords = number2Words.toCurrencyWords(val);
    });

    $('[data-toggle="tooltip"]').tooltip();

    $scope.dropzoneConfig = {
    'options': {// passed into the Dropzone constructor
      'url': '/',
      'thumbnail': function (file, dataUrl) {
        $scope.$apply(function(){
          $scope.logo = dataUrl;
        });
      }
    },
    'eventHandlers': {
      'sending': function (file, xhr, formData) {},
      'success': function (file, response) {}
    }
  };

  }
})();
