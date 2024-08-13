/**
 * Given an initial message, a # of keys to encript and the equivalent of the new keys, encript the new message
 * @param {string} message 
 * @param {Array[string]} keysToEncript 
 * @param {Array[string]} keysUsedforReplacing 
 */

function substitutionCipher(message, keysToEncript, keysUsedforReplacing) {
    if (keysToEncript.length != keysUsedforReplacing.length) {
        throw new RangeError('substitutionCipher() Error: both keys must have the same length');
    }
    if (message.length === 0 || keysToEncript.length === 0 || keysUsedforReplacing.length === 0) {
        throw new RangeError('Length cannot be 0 in none of the defined parameters')
    }
    if (typeof message !== 'string' || typeof keysToEncript !== 'object' || typeof keysUsedforReplacing !== 'object') {
        throw new TypeError('Parameters should be of type string/array[string]/array[string]')
    }

    let cipheredMessage = message.trim().replace(' ', '');
    for (let i = 0; i < keysToEncript.length; i++) {
        cipheredMessage = cipheredMessage.replaceAll(keysToEncript[i], keysUsedforReplacing[i])
    }
    return cipheredMessage;
}

module.exports = substitutionCipher
