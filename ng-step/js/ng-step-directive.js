'use strict';

angular.module('planavsky.directive.ngStep',[])
  .directive('ngStep', ngStep);

ngStep.$inject = ['$http', '$compile', '$timeout'];

// TODO: get rid of jquery references and figure out why angular.element cant be used as a selector

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
    vm.displayButtons = $attrs.displayButtons;
    vm.activeId = 0;
    vm.lastId = vm.items.length - 1;

    vm.navigate = function (action) {

      if (action === 'previous') {
        vm.activeId--;
      }

      if (action === 'next') {
        vm.activeId++;
      }

      $scope.changeView(vm.activeId);

    };

    var init = function () {

      angular.forEach(vm.items, function (item, key) {

        if (!item.templateLoaded) {
          item.templateLoaded = true;
          item.uiView = 'planavsky.ng.step.ui.view-' + key;
          loadUrl(item.url, item.uiView);
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
          $compile(content)($scope);
        });

      }, 1);

    };

    init();

  }

  function link (scope, element, attrs) {

    /*

     sample data model:

     items:

     [{
      icon : 'icon',
      desc : 'desc' (optional),
      url : '{ view path }' (optional)
     }]

    */

    scope.changeView = function (activeId) {

      // animate eventually, just show/hide for now
      angular.forEach(scope.vm.items, function (item, key) {

        if (key === activeId) {
          $('#ng-step-content-pane-' + key).show();
          console.log('show ' + key);
        }
        else
        {
          $('#ng-step-content-pane-' + key).hide();
          console.log('hide ' + key);
        }

      });

    };

  }

}