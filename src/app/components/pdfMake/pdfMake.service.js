(function() {

  angular
    .module('fakturownikFront')
    .factory('pdfMakeService', pdfMakeService);

  /** @ngInject */
  function pdfMakeService(invoiceService) {
    if (angular.isUndefined(pdfMake)) {
      throw "pdfMake is not defined. Please download and add pdfMake library to the script.";
    }

    return {
      download: function() {
        FancyPDF.create(invoiceService);
      }
    };
  }

})();
