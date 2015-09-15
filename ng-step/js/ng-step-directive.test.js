'use strict';

describe('ng-step', function () {

    var element, scope, controller;

    beforeEach(module('planavsky.directive.ngStep'));
    beforeEach(module('ng-step/views/index.html'));
    beforeEach(module('mock-data/sample-data.json'));

    beforeEach(inject(function($rootScope, $compile, $httpBackend) {

        scope = $rootScope.$new();

        // use mock api data here
        scope.demoData = [
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

        element = angular.element('<ng-step data-items="demoData"></ng-step>');
        $compile(element)(scope);
        scope.$digest();

        controller = element.controller('ngStep');

    }));

    it('test example 1', function () {

        expect(element.isolateScope().vm.activeId).toBe(0);

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