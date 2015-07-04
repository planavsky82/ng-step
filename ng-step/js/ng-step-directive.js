'use strict';

angular.module('planavsky.directive.ngStep',[])
  .directive('ngStep', ngStep);

ngStep.$inject = ['$http', '$compile', '$timeout'];

function ngStep($http, $compile, $timeout) {

  var directive = {
    templateUrl: '/ng-step/views/index.html',
    restrict: 'E',
    scope: {
      items: '='
    },
    compile: compile,
    controller: controller,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;

  function compile (element, attrs) {

    if (!attrs.displayProgressBar) {
      attrs.displayProgressBar = false;
    }

    if (!attrs.displayToken) {
      attrs.displayToken = true;
    }

    if (!attrs.displayButtons) {
      attrs.displayButtons = true;
    }

    return {
      post: link
    };

  }

  function controller ($scope, $element, $attrs) {

    var vm = this;

    vm.displayProgressBar = $attrs.displayProgressBar;
    vm.displayToken = $attrs.displayToken;

    var init = function () {

      angular.forEach(vm.items, function (item, key) {

        if (!item.templateLoaded) {
          item.templateLoaded = false;
        }

        if (navItem.id === scope.activeId) {
          /* navItem['active'] = true;

           // load specified templates if available
           if (scope.uiView && !navItem['templateLoaded']) {
           navItem['uiView'] = 'benefits.adp.step.navigation.' + navItem.id;
           loadUrl(navItem.url, navItem.uiView);
           navItem['templateLoaded'] = true;
           }*/

        }
        else {
          //navItem['active'] = false;
        }

      });

    };

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

  function link (scope, element, attrs) {

    /*

     sample data model:

     items:

     [{
     id : 'id',
     icon : 'icon',
     desc : 'desc' (optional),
     url : '{ view path }' (optional)
     }]

    */

    console.log(scope);



  }

}