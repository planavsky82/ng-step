'use strict';

angular.module('planavsky.directive.ngStep',[])
  .directive('ngStep', ngStep);

ngStep.$inject = [];

function ngStep() {

  var directive = {
    templateUrl: 'directive/views/index.html',
    restrict: 'E',
    scope: {

    },
    compile: compile,
    controller: controller,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;

  function compile (element, attrs) {

    /* if (!attrs.heightLimit) {
      attrs.heightLimit = 0;
    } */

    return {
      post: link
    };

  }

  function controller ($scope, $element, $attrs) {

    var vm = this;

    /* vm.setDisplay = function (display) {
      vm.displayLink = display;
    }; */

  }

  function link (scope, element, attrs) {



  }

}