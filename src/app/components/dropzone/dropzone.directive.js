/**
* An AngularJS directive for Dropzone.js, http://www.dropzonejs.com/
*
* Usage:
*
* <div ng-app="app" ng-controller="SomeCtrl">
*   <button dropzone="dropzoneConfig">
*     Drag and drop files here or click to upload
*   </button>
* </div>
*/
(function() {

  angular
    .module('fakturownikFront')
    .directive('dropzone', dropzone);

  /** @ngInject */
  function dropzone() {
    var directive = {
      restrict: 'A',
      link: linkFunc
    };

    return directive;

    function linkFunc(scope, element, attrs) {
      var config, dropzone;

      config = scope[attrs.dropzone];

      // create a Dropzone for the element with the given options
      dropzone = new Dropzone(element[0], config.options);

      // bind the given event handlers
      angular.forEach(config.eventHandlers, function (handler, event) {
        dropzone.on(event, handler);
      });
    }
  }

})();
