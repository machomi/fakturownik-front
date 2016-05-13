(function() {

  angular
      .module('fakturownikFront')
      .service('jsPdfService', jsPdfService);

  /** @ngInject */
  function jsPdfService() {
    console.log('jsPdfService');
    if (angular.isUndefined(jsPDF)) {
      throw "jsPDF is not defined. Please download and add jspdf library to the script.";
    }
    var pdfContentElement = angular.element("#invoice").get(0);
    var downloadName = "Faktura.pdf";

    this.download = function () {
      var doc = new jsPDF();
      doc.addHTML(pdfContentElement, function() {
        doc.save(downloadName);
      });
    };
  }

})();
