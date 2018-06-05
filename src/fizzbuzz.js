let memory;

function fizzbuzz(number) {

    if (typeof number === 'string') {
        throw 'invalid argument, strings are not supported';
    }

    memory = number;
    const by5 = number  % 5 ===  0;
    const by3 = number  % 3 ===  0;

    if (number < 0) {
      return memory * number;
    } else if (number < 1 ) {
        return (number * 0.2)
    } else if (isPrime(number)) {
      return 'prime';
    } else if (by5 && by3) {
        return 'fizzbuzz';
    } else if (by5) {
        return 'buzz';
    } else if (by3) {
        return 'fizz';
    }
}


const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return num !== 1;
};

module.exports = fizzbuzz;