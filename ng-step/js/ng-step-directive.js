'use strict';

angular.module('planavsky.directive.ngStep',[])
  .directive('ngStep', ngStep);

ngStep.$inject = ['$http', '$compile'];

function ngStep($http, $compile) {

  var directive = {
    templateUrl: '/ng-step/views/index.html',
    restrict: 'E',
    scope: {
      navigationItems: '=' // rename!!!!
    },
    compile: compile,
    controller: controller,
    controllerAs: 'vm',
    bindToController: true,
    transclude: true //REMOVE!!!!
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

     /*

     sample data model:

     navigationItems:

     [{
     id : 'id',
     icon : 'icon',
     desc : 'desc' (optional),
     url : '{ view path }' (optional)
     }]

     */

    var loadUrl = function (url, uiView) {

      // adding $timeout so that the container divs can be referenced after the dom is loaded
      $timeout(function () {

        var content = $('[ui-view="' + uiView + '"]');

        // Manually load content into ui-view
        $http.get(url).success(function(html) {
          content.html(html);
          $compile(content)(scope);
        });

      }, 1);

    };

  }

}