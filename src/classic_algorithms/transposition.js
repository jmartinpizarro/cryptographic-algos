/**
 * Given an initial message, model of transposition and keyword, ciphers the messages using the transposition algorithm.
 * @param {string} message 
 * @param {string} model 
 * @param {Object.<string, number>} keyWord
 * @returns 
 */

// v.1.0.0 can handle two types of transposition cipher: zigzag and single columnar transposition cipher
function transpositionCipher(message, model = 'zigzag', keyWord = '') {
    if (message.length == 0) {
        throw new RangeError('tranpositionCipher() Error: Message to cipher must have a length of, at least, 1 character')
    }
    const messageToCipher = message.trim().replaceAll(' ', '')
    let cipherMessage = ''
    if (model === 'zigzag') {
        let oddNumbers = []
        let evenNumbers = []
        for (let i = 0; i < messageToCipher.length; i++) {
            if (i % 2 == 0) {
                evenNumbers.push(i)
            } else {
                oddNumbers.push(i)
            }
        }

        for (let i = 0; i < evenNumbers.length; i++) {
            cipherMessage += messageToCipher[evenNumbers[i]]
        }
        for (let i = 0; i < oddNumbers.length; i++) {
            cipherMessage += messageToCipher[oddNumbers[i]]
        }
    } else {
        if (model !== 'single-columnar') {
            throw new SyntaxError('transpositionCipher() Error: Model parameter can be either "zigzag" or "single-columnar"');
        }
        if (typeof keyWord !== 'object' || Object.keys(keyWord).length === 0) {
            throw new TypeError('transpositionCipher() Error: Keyword parameter must be an object such as Object<string, number> with length bigger than 0');
        }

        let matrix = [];
        let keyLength = Object.keys(keyWord).length;
        let rowIndex = 0;

        // fill the matrix
        for (let i = 0; i < messageToCipher.length; i += keyLength) {
            let row = messageToCipher.slice(i, i + keyLength).split('');

            while (row.length < keyLength) {
                row.push('_');
            }
        
            matrix[rowIndex] = row;
            rowIndex++;
        }

        // order columns
        let sortedKey = Object.entries(keyWord).sort((a, b) => a[1] - b[1]);

        for (let [letter, order] of sortedKey) {
            let columnIndex = Object.keys(keyWord).indexOf(letter);
            for (let row of matrix) {
                if (row[columnIndex]) {
                    cipherMessage += row[columnIndex];
                }
            }
        }
    }
    return cipherMessage
}

module.exports = transpositionCipher