/**
 * @fileoverview Tests for the 'caesarCipher' function located in the file 'caesar.js'
 * The aim of this file is to generate several unit tests to check and prove the correct
 * and functional working of the function
 */

const caesarCipher = require('../src/classic_algorithms/caesar');
const genericAlphabet = [...'abcdefghijklmnopqrstuvwxyz'];

/**
 * Test that verifies if the function returns the expected error when given an empty alphabet
 */
test('Empty alphabet array', () => {
    expect(() => caesarCipher(message='hello', alphabet=[], n_rotation=2)).toThrow(RangeError);
})

/**
 * Test that verifies if the function returns the expected error when given an message string
 */
test('Empty message string', () => {
    expect(() => caesarCipher(message='', alphabet=genericAlphabet, n_rotation=2)).toThrow(RangeError);
})

/**
 * Test that verifies if the function returns the expected error when given an invalid n_rotation number (less than 0)
 */
test('Wrong n_rotation parameter (less than 0)', () => {
    expect(() => caesarCipher(message='hello', alphabet=genericAlphabet, n_rotation=-3)).toThrow(RangeError);
})

/**
 * Test that verifies if the function returns the expected error when given an invalid n_rotation number (bigger than alphabet.length)
 */
test('Wrong n_rotation parameter (greater than alphabet.length)', () => {
    expect(() => caesarCipher(message='hello', alphabet=genericAlphabet, n_rotation=-3)).toThrow(RangeError);
})

/**
 * Test that verifies if the function returns the expected ciphered alphabet and message given a message without blank spaces
 */
test('Ciphering message without blank spaces', () => {
    const message ='abcde';
    const n_rotation = 2;

    const expectedAlphabet = [...'cdefghijklmnopqrstuvwxyzab'];
    const expectedMessage = 'cdefg';

    const output = caesarCipher(message, genericAlphabet, n_rotation);
    expect(output.cipheredAlphabet).toStrictEqual(expectedAlphabet);
    expect(output.cipheredMessage).toStrictEqual(expectedMessage);
})

/**
 * Test that verifies if the function returns the expected ciphered alphabet and message given a message with blank spaces
 */
test('Ciphering message with blank spaces', () => {
    const message ='    abc de  ';
    const n_rotation = 3;

    const expectedAlphabet = [...'defghijklmnopqrstuvwxyzabc'];
    const expectedMessage = 'defgh';

    const output = caesarCipher(message, genericAlphabet, n_rotation);
    expect(output.cipheredAlphabet).toStrictEqual(expectedAlphabet);
    expect(output.cipheredMessage).toStrictEqual(expectedMessage);
})
