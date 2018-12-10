const fizzbuzz = require('../src/fizzbuzz');

describe('FizzBuzz', function() {

    it('bei 0 soll 0 zurückkommen', function() {
        expect(fizzbuzz(0)).toBe(0);
        expect(fizzbuzz(6)).toBe('fizz');

        expect(fizzbuzz(10)).toBe('buzz');

    });




});

