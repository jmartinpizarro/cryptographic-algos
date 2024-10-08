// this function takes by default the english alphabet
const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

// how did this algorithm worked? Given an alphabet, and a number n_rotation (be a number), the given characters of the current alphabet would change into the new rotated one. Then, you will cript the message

/**
 * Given an initial message, an alphabet and the number of initial iterations on the original alphabet, it returns an object with the ciphered alphabet and the ciphere message
 * @param {string} message 
 * @param {Array[string]} alphabet 
 * @param {number} n_rotation 
 * @returns 
 */

function caesarCipher(message, alphabet, n_rotation) {
    if (alphabet.length === 0) {
        throw new RangeError('caesarCipher() Error: The length of the alphabet parameter cannot be empty')
    }
    if (message.length === 0) {
        throw new RangeError('caesarCipher() Error: The length of the message parameter cannot be 0')
    }
    if (n_rotation <= 0 || n_rotation >= alphabet.length) {
        throw new RangeError('caesarCipher() Error: The n_rotation parameter must be bigger than 0 and smaller than the length of the alphabet')
    }
    const cipheredAlphabet = [];
    let counter = 0;
    let cipheredMessage = '';
    while (counter < alphabet.length - n_rotation) {    // while we have positions to append
        cipheredAlphabet.push(alphabet[counter + n_rotation]);
        counter++;
    }

    for (let i = 0; i < n_rotation; i++) {   // for the remaining positions, we start again from the beggining
        cipheredAlphabet.push(alphabet[i]);
    }

    const nomenclator = {}  // object that Object[chracter from init alphabet] -> character from ciphered alphabet
    for (let i = 0; i < cipheredAlphabet.length; i++) {
        nomenclator[alphabet[i]] = cipheredAlphabet[i]
    }

    const messageToCipher = message.trim().replaceAll(' ', '').trim();
    for (index in messageToCipher) {
        cipheredMessage += nomenclator[messageToCipher[index]]
    }

    if (cipheredMessage.length != message.trim().replaceAll(' ', '').length) {
        throw new Error('caesarCipher() Internal Error: Something wrong has happened when ciphering the message: length of both, ciphered and original message is not the same')
    }

    return { cipheredAlphabet, cipheredMessage }    // returns the ciphered message and the rotated alphabet
};

module.exports = caesarCipher;