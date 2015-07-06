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
        id : 1,
        icon : 'icon1',
        desc : 'desc1',
        url : 'pages/page-1.html',
        uiView: 'view1'
      },
      {
        id : 2,
        icon : 'icon2',
        desc : 'desc2',
        url : 'pages/page-2.html',
        uiView: 'view2'
      },
      {
        id : 3,
        icon : 'icon3',
        desc : 'desc3',
        url : 'pages/page-3.html',
        uiView: 'view3'
      },
      {
        id : 4,
        icon : 'icon4',
        desc : 'desc4',
        url : 'pages/page-4.html',
        uiView: 'view4'
      },
      {
        id : 5,
        icon : 'icon5',
        desc : 'desc5',
        url : 'pages/page-5.html',
        uiView: 'view5'
      }
    ];

  }

})();