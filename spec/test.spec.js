const fizzbuzz = require('../src/fizzbuzz');

describe('FizzBuzz', function() {

    it('bei 0 soll 0 zurückkommen', function() {
        expect(fizzbuzz(0)).toBe(1);
        expect(fizzbuzz(3)).toBe('fizz');

        expect(fizzbuzz(5)).toBe('buzz');

        expect(fizzbuzz(0)).toBe(1);

        expect(fizzbuzz(0)).toBe(1);

        expect(fizzbuzz(0)).toBe(1);

    });

    it('true should be true', function() {
    })


});

