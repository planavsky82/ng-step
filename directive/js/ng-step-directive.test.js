'use strict';

describe('ng-step directive', function () {

    it('test example 1', function () {
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