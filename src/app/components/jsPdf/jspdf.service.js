/*global jsPDF*/

(function() {

  angular
    .module('fakturownikFront')
    .service('jsPdfService', jsPdfService);

  /** @ngInject */
  function jsPdfService() {

    if (angular.isUndefined(jsPDF)) {
      throw "jsPDF is not defined. Please download and add jspdf library to the script.";
    }
    var pdfContentElement = angular.element("#invoice-print");
    var downloadName = "Faktura.pdf";

    this.download = function() {
      pdfContentElement.removeClass("visible-print");
      var doc = new jsPDF();
      doc.addHTML(pdfContentElement.get(0), function() {
        doc.save(downloadName);
        pdfContentElement.addClass("visible-print");
      });

      // html version seeems not working properly - lets look for an alternative
      // doc.fromHTML(pdfContentElement.get(0), 0, 0, {
      // }, function() {
      //   doc.save(downloadName);
      //   pdfContentElement.addClass("visible-print");
      // });
    };
  }

})();
