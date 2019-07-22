const fizzbuzz = require('../src/fizzbuzz');

describe('FizzBuzz', function () {

    [15, 30, 45, 60].forEach(function (number) {
        it('should return fizzbuzz when divisable by 5 and 3, testing: ' + number, function () {
            expect(fizzbuzz(number)).toBe('fizzbuzz');
        })
    });

    [3, 6, 9, 12, 18].forEach(function (number) {
        it('should return fizz for multiples of 3, testing: ' + number, function () {
            expect(fizzbuzz(number)).toBe('fizz');
        })
    });

    [5, 10, 20, 25].forEach(function (number) {
        it('should return buzz for multiples of 5, testing: ' + number, function () {
            expect(fizzbuzz(number)).toBe('buzz');
        })
    });

    [2, 7, 11, 13, 17, 19, 23].forEach(function (number) {
        it('should return prime for primes, testing: ' + number, function () {
            expect(fizzbuzz(number)).toBe('prime');
        })
    })

    it('should return undefined on non integers', function () {
        expect(fizzbuzz(10.2)).toBeUndefined();
    });
    it('should return prime on primes', function () {
        expect(fizzbuzz(11)).toBe('prime');
    });
    it('should return the number on other ints', function () {
        expect(fizzbuzz(14)).toBe(14);
    });

    it('should throw', function () {
        expect(
            function () {
                fizzbuzz('23')
            }
        ).toThrow('Invalid Argument');
    });

    it('should return product with previous value when negative', function () {
        fizzbuzz(2);
        expect(fizzbuzz(-6)).toBe(-12);
    });

    it('should multiply by 0.2 when between 0 and 1', function () {
        expect(fizzbuzz(0.2)).toBeCloseTo(0.04);
    });

});

