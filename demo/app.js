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
        url : ''
      },
      {
        id : 2,
        icon : 'icon2',
        desc : 'desc2',
        url : ''
      },
      {
        id : 3,
        icon : 'icon3',
        desc : 'desc3',
        url : ''
      }
    ];

  }

})();