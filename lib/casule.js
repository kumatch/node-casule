var crypto = require('crypto');
var format = require('util').format;

module.exports = function (options) {
    options = options || {};

    var salt = options.salt || '';
    var algorithm = options.algorithm || 'sha1';

    function createToken (attributes) {
        attributes = attributes || {};

        var hmac = crypto.createHmac(algorithm, salt);
        var keys = Object.keys(attributes).sort();

        keys.forEach(function (key) {
            hmac.update(format('%s=%s;', key, attributes[key]));
        });

        return hmac.digest('base64');
    }


    function challenge (token, attributes) {
        return (token === createToken(attributes));
    }

    return {
        create: createToken,
        challenge: challenge
    };
};