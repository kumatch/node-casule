var expect = require('chai').expect;
var casule = require('../');

var attributes1 = { foo: 123 };
var attributes2 = { foo: 123, bar: 4567, baz: 'quuux' };
var salt = 'testsalt';


function testForCasule(c, attributes, result) {
    var token = c.create(attributes);

    it('should rutern valid token', function () {
        expect(token).to.equal(result);
    });

    it('should rutern ture runs challenge.', function () {
        expect( c.challenge(token, attributes) ).be.true;
    });
}


describe('Uses no parameter', function () {
    var c = casule();

    describe('and create token with no attribute', function () {
        var token = '+9sdGxiqbAgyS31ktx+3Y3BpDh0=';
        testForCasule(c, null, token);
    });

    describe('and create token with a attribute', function () {
        var token = 'E8YJX8OYfWifXiYrGlQAAkWTTBI=';

        testForCasule(c, attributes1, token);
    });

    describe('and create token with three attributes', function () {
        var token = '0m5RNhcVh3ytHmpR3b5Xy5Lx/BI=';

        testForCasule(c, attributes2, token);
    });
});


describe('Uses with salt', function () {
    var c = casule({ salt: salt });

    describe('and create token with no attribute', function () {
        var token = 'Ys26uXfhUJe/aisbjLJcUZLh4PI=';
        testForCasule(c, null, token);
    });

    describe('and create token with a attribute', function () {
        var token = '/oVk84cImgdzooNmrOCFcLg3Zvc=';

        testForCasule(c, attributes1, token);
    });

    describe('and create token with three attributes', function () {
        var token = 'OuZjni652p9rWm4FA8qebPQUK3U=';

        testForCasule(c, attributes2, token);
    });
});

describe('Uses sha512 algorithm', function () {
    var c = casule({ algorithm: 'sha512' });

    describe('and create token with no attribute', function () {
        var token = 'uTbO6Gyfh6pdPG8uhMtaQjml/lBICm7Ga3CrWx9KxnMMbFFUIbMn7B1pQC5T37Sa1zgesGezOP17DLIiRyJdRw==';
        testForCasule(c, null, token);
    });

    describe('and create token with a attribute', function () {
        var token = 'f0csIMFELbFXQxklKsNx+cRxOvDF6tBKESTPVAy2soEyoosD9tLtbYddh5b67FNZ8JHSgvuq36Nm0ak4g9/zVg==';

        testForCasule(c, attributes1, token);
    });

    describe('and create token with three attributes', function () {
        var token = 'uIQJydzJx8z974K2KjMk3h7vIL4jSz4XixrUUw4At0aLLvnI3zrKrdb6pJpo5nsX7wQV44OeoTzgDey2qMF+pw==';

        testForCasule(c, attributes2, token);
    });
});

describe('Uses sha512 algorithm with salt', function () {
    var c = casule({ algorithm: 'sha512', salt: salt });

    describe('and create token with no attribute', function () {
        var token = 'f/30Kud3L/T2pgmESc6ZkRPRaqReBLf8W4NfzIeiKsIrRW2sWTX8geDk+8lFVIlqEhqM3TfjCoPxI2NiREG8cQ==';
        testForCasule(c, null, token);
    });

    describe('and create token with a attribute', function () {
        var token = 'f6UDOuwJXLuOAMyA9E07RsYTXvXMilZeKHhjtphkYGEyO9YmuCmfo8Co/nSMem3PHq6RO/cu2rlf1OiQHpPZZw==';

        testForCasule(c, attributes1, token);
    });

    describe('and create token with three attributes', function () {
        var token = 'gVENar7OZhCqlPMRRn73H7/XRNw6bIfhIbWxtUgeAihxV+BRlJYcQnUpsbm4YQJqvO5ePj6rBDKWfeLLqPbSQg==';

        testForCasule(c, attributes2, token);
    });
});
