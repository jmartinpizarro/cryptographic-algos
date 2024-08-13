/**
 * @fileoverview Tests for the 'substitutionCipher' function located in the file 'substitution.js'
 * The aim of this file is to generate several unit tests to check and prove the correct
 * and functional working of the function
 */

const substitutionCipher = require('../src/classic_algorithms/substitution')

/**
 * These tests verify that the function raises an error when passing incorrect type parameters
 */
test('Incorrect type of parameter "message" -> type number', () => {
    const message = 123;
    const keysToEncript = ['a', 'b']
    const keysUsedforReplacing = ['c', 'd']
    expect(() => substitutionCipher(message, keysToEncript, keysUsedforReplacing).toThrow(TypeError))
})

test('Incorrect type of parameter "message" -> type boolean', () => {
    const message = true;
    const keysToEncript = ['a', 'b']
    const keysUsedforReplacing = ['c', 'd']
    expect(() => substitutionCipher(message, keysToEncript, keysUsedforReplacing).toThrow(TypeError))
})

test('Incorrect type of parameter "keysToEncript" -> type string', () => {
    const message = "hello";
    const keysToEncript = 'a'
    const keysUsedforReplacing = ['c', 'd']
    expect(() => substitutionCipher(message, keysToEncript, keysUsedforReplacing).toThrow(TypeError))
})

test('Incorrect type of parameter "keysUsedforReplacing" -> type string', () => {
    const message = "hello";
    const keysToEncript = ['a', 'b']
    const keysUsedforReplacing = 'a'
    expect(() => substitutionCipher(message, keysToEncript, keysUsedforReplacing).toThrow(TypeError))
})

/**
 * This tests verify that the function raises an error when the length of "keysToEncript" and "keysUsedforReplacing" are not the same
 */
test('Incorrect length for keysToEncript', () => {
    const message = "hello"
    const keysToEncript = ['a', 'b']
    const keysUsedforReplacing = ['a']
    expect(() => substitutionCipher(message, keysToEncript, keysUsedforReplacing).toThrow(RangeError))
})

/**
 * These tests verify that the function returns the correct ciphered word
 */
test('Ciphering message with no blank spaces', () => {
    const message = 'haillibertas';
    const keysToEncript = ['l', 'a', 'i'];
    const keysUsedforReplacing = ['e', 'u', 'y'];
    const expectedMessage = 'huyeeybertus';

    expect(() => substitutionCipher(message, keysToEncript, keysUsedforReplacing).toStrictEqual(expectedMessage))
})

test('Ciphering message with blank spaces', () => {
    const message = '  hail libertas          ';
    const keysToEncript = ['l', 'a', 'i'];
    const keysUsedforReplacing = ['e', 'u', 'y'];
    const expectedMessage = 'huyeeybertus';

    expect(() => substitutionCipher(message, keysToEncript, keysUsedforReplacing).toStrictEqual(expectedMessage))
})


