'use strict';

describe('ng-step', function () {

    var element, scope, controller, demoData;

    // use mock api data here
    demoData = [
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

    beforeEach(module('planavsky.directive.ngStep'));
    beforeEach(module('templates'));

    beforeEach(inject(function($rootScope, $compile) {

        //scope = $rootScope.$new();
        //element = angular.element('<ng-step data-items="demoData"></ng-step>');
        //$compile(element)(scope);
        //scope.$digest();

        //scope = $rootScope.$new();
        //$compile(el)(scope);
        //scope.$digest();
        //expect(el.isolateScope().vm.lastActiveId.toBeDefined());
        //console.log(el);

        //$compile(el)($rootScope.$new());
        //console.log($compile(el).controller());
        //console.log(el.controller('ngStep'));

        //controller = el.controller('ngStep');

    }));

    it('test example 1', function ($rootScope, $compile) {

        //var element = angular.element('<ng-step data-items="demoData"></ng-step>');
        //console.log($compile(el)(scope));



        //$compile(element)(scope);

        //console.log(controller);

        // Arrange
        var num1 = 1;
        var num2 = 3;
        var expected = 4;

        // Act
        var result = num1 + num2;

        // Assert
        expect(result).toBe(expected);
    });

});