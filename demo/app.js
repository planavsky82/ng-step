'use strict';

(function() {

  angular.module('demo', [
    'planavsky.directive.ngStep'
  ])

  .controller('demoCtrl', demoCtrl);

  demoCtrl.$inject = [];

  function demoCtrl() {

    var vm = this;

    vm.demoObj = [
      {
        icon : 'fa-html5',
        shortDesc : 'desc1',
        url : 'pages/page-1.html'
      },
      {
        icon : 'fa-moon-o',
        shortDesc : 'desc2',
        url : 'pages/page-2.html'
      },
      {
        icon : 'fa-group',
        shortDesc : 'desc3',
        url : 'pages/page-3.html'
      },
      {
        icon : 'fa-flash',
        shortDesc : 'desc4',
        url : 'pages/page-4.html'
      },
      {
        icon : 'fa-leaf',
        shortDesc : 'desc5',
        url : 'pages/page-5.html'
      }
    ];

  }

})();