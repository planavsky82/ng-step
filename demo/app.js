'use strict';

(function() {

  angular.module('demo', [
    'planavsky.directive.ngStep'
  ])

      .controller('demoCtrl', demoCtrl);

  ngStep.$inject = [];

  function demoCtrl() {

    var vm = this;

    vm.demoObj = [
      {
        id : 1,
        icon : 'icon',
        desc : 'desc',
        url : ''
      },
      {
        id : 2,
        icon : 'icon',
        desc : 'desc',
        url : ''
      },
      {
        id : 3,
        icon : 'icon',
        desc : 'desc',
        url : ''
      }
    ];

  }

})();