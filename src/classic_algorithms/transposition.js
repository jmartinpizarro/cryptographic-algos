/**
 * 
 * @param {string} message 
 * @param {string} keyWord
 * @param {string} model 
 * @returns 
 */

// v.1.0.0 can handles two types of transposition cipher: zigzag and single columnar transposition cipher
function transpositionCipher(message, model = 'zigzag', keyWord = '') {
    const messageToCipher = message.trim().replaceAll(' ', '')

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

        let cipherMessage = ''
        for (let i = 0; i < evenNumbers.length; i++) {
            cipherMessage += messageToCipher[evenNumbers[i]]
        }
        for (let i = 0; i < oddNumbers.length; i++) {
            cipherMessage += messageToCipher[oddNumbers[i]]
        }
    }
    return cipherMessage
}

module.exports = transpositionCipher