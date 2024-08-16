/**
 * @fileoverview Tests for the 'transpositionCipher' function located in the file 'substitution.js'
 * The aim of this file is to generate several unit tests to check and prove the correct
 * and functional working of the function
 */

const transpositionCipher = require('../src/classic_algorithms/transposition')

/**
 * These tests verify that the parameters passed to the functions are from the correct type
 */
test('Incorrect type of the parameter "message"', () => {
    const message = 1234;
    expect(() => transpositionCipher(message=message).toThrow(TypeError))
})

test('Incorrect type of the parameter "model"', () => {
    const message = '1234';
    const model = true
    expect(() => transpositionCipher(message=message, model=model).toThrow(TypeError))
})

test('Incorrect type of the parameter "keyWord"', () => {
    const message = '1234';
    const model = 'zigzag'
    const keyWord = "hola"
    expect(() => transpositionCipher(message=message, model=model, keyWord=keyWord).toThrow(TypeError))
})

/**
 * This test verify that the parameters passed to the function are in the correct range
 */
test('Incorrect range of the parameter "message"', () => {
    const message = '';
    expect(() => transpositionCipher(message=message).toThrow(RangeError))
})

/**
 * This tests verifies that the function throws an error when the model is incorrect
 */
test('Incorrect sintax of the parameter "model"', () => {
    const message = 'hola';
    const model = 'fitoyfitipaldis'
    expect(() => transpositionCipher(message=message, model=model).toThrow(SyntaxError))
})

/**
 * These tests verify the correct functionality of the function when passing a message with and without blank spaces using just single-columnar method
 */
test('Message without blankspaces/columnar method', () => {
    const message = 'haillibertas'
    const model = 'single-columnar'
    const keyWord = {'n' : 2, 'i': 3, 'c': 1, 'k': 4}

    const expectedOutput = 'ibahlraitles'

    expect(() => transpositionCipher(message=message, model=model, keyWord=keyWord).toStrictEqual(expectedOutput))
})

test('Message without blankspaces/columnar method', () => {
    const message = 'haillibertasb' // array is not odd, we have to add "_"
    const model = 'single-columnar'
    const keyWord = {'n' : 2, 'i': 3, 'c': 1, 'k': 4}

    const expectedOutput = 'iba_hlrait_les_'

    expect(() => transpositionCipher(message=message, model=model, keyWord=keyWord).toStrictEqual(expectedOutput))
})

/**
 * These test verify the correct functionality of the function when passing a message with and without blank spaces using just zigzag method
 */
test('Message without blankspaces/zigzag method', () => {
    const message = 'helloworld'
    const model = 'zigzag'
    const expectedOutput = 'hloolelwrd'
    expect(() => transpositionCipher(message=message, model=model).toStrictEqual(expectedOutput))
})

test('Message with blankspaces/zigzag method', () => {
    const message = 'hello world    '
    const model = 'zigzag'
    const expectedOutput = 'hloolelwrd'
    expect(() => transpositionCipher(message=message, model=model).toStrictEqual(expectedOutput))
})