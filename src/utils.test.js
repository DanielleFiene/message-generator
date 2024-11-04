// tests/utils.test.js

// Importing the utility function to be tested.
const { getRandomElement } = require('../src/utils');

// Grouping tests related to the getRandomElement function using Jest's describe function.
describe('getRandomElement Function Tests', () => {
    
    // Test to verify that getRandomElement returns an element from a non-empty array.
    test('getRandomElement should return an element from a non-empty array', () => {
        const array = ['apple', 'banana', 'cherry'];
        const element = getRandomElement(array);
        // Assert that the returned element is contained in the original array.
        expect(array).toContain(element);
    });

    // Test to ensure that getRandomElement returns undefined when given an empty array.
    test('getRandomElement should return undefined for an empty array', () => {
        const array = [];
        const element = getRandomElement(array);
        // Assert that the result is undefined when no elements are present.
        expect(element).toBeUndefined();
    });

    // Test to verify that getRandomElement returns the correct element when the array has only one item.
    test('getRandomElement should handle arrays with one element', () => {
        const array = ['onlyElement'];
        const element = getRandomElement(array);
        // Assert that the returned element matches the only element in the array.
        expect(element).toBe('onlyElement');
    });

    // Test to check that getRandomElement returns a random element when called multiple times.
    test('getRandomElement should return a random element when called multiple times', () => {
        const array = ['apple', 'banana', 'cherry'];
        // Generate an array of results by calling getRandomElement 100 times.
        const results = Array.from({ length: 100 }, () => getRandomElement(array));
        
        // Assert that at least one of the expected elements is included in the results.
        expect(results).toEqual(expect.arrayContaining(array));
    });
});
