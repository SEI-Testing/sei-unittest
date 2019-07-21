const fizzbuzz = require('../src/fizzbuzz');

describe('FizzBuzz', function() {

    it('bei 0 soll 0 zurückkommen', function() {
        expect(fizzbuzz(0)).toBe(0);
    });

    it('bei 6 soll fizz zurückkommen', function() {
        expect(fizzbuzz(6)).toBe('fizz');

    });

    it('bei 10 soll buzz zurückkommen', function() {

        expect(fizzbuzz(11)).toBe('buzz');

    });

});

