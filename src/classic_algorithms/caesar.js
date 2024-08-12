// this function takes by default the english alphabet
const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

// how did this algorithm worked? Given an alphabet, and a number n_rotation (be a number), the given characters of the current alphabet would change into the new rotated one. Then, you will cript the message

/**
 * Given an initial message, an alphabet and the number of initial iterations on the original alphabet, it returns a ciphered messaged and the new alphabet
 * @param {string} message 
 * @param {Array[string]} alphabet 
 * @param {number} n_rotation 
 * @returns 
 */

function caesarCipher(message, alphabet, n_rotation) {
    if (alphabet.length === 0) {
        throw new Error('caesarCipher() Error: The length of the alphabet parameter cannot be empty')
    }
    if (n_rotation <= 0) {
        throw new Error('caesarCipher() Error: The n_rotation parameter must be bigger than 0')
    }
    const result = [];
    let counter = 0;
    let cipheredMessage = '';
    while (counter < alphabet.length - n_rotation) {    // while we have positions to append
        result.push(alphabet[counter + n_rotation]);
        counter++;
    }

    for (let i = 0; i < n_rotation; i++){   // for the remaining positions, we start again from the beggining
        result.push(alphabet[i]);
    }

    return { result, cipheredMessage }     // returns the ciphered message and the rotated alphabet
};
