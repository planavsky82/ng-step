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
        icon : 'icon1',
        desc : 'desc1',
        url : 'pages/page-1.html'
      },
      {
        icon : 'icon2',
        desc : 'desc2',
        url : 'pages/page-2.html'
      },
      {
        icon : 'icon3',
        desc : 'desc3',
        url : 'pages/page-3.html'
      },
      {
        icon : 'icon4',
        desc : 'desc4',
        url : 'pages/page-4.html'
      },
      {
        icon : 'icon5',
        desc : 'desc5',
        url : 'pages/page-5.html'
      }
    ];

  }

})();