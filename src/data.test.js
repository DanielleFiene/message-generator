// tests/data.test.js

// Importing the data arrays from the source module.
// These arrays will be tested to ensure they contain the expected values and are not empty.
const { subjects, actions, advices } = require('../src/data');

// Grouping the tests related to the data arrays using Jest's describe function.
describe('Data Arrays Tests', () => {
    
    // Test to ensure the subjects array is not empty.
    test('subjects array should not be empty', () => {
        // Check that the length of the subjects array is greater than zero.
        expect(subjects.length).toBeGreaterThan(0);
    });

    // Test to ensure the actions array is not empty.
    test('actions array should not be empty', () => {
        // Check that the length of the actions array is greater than zero.
        expect(actions.length).toBeGreaterThan(0);
    });

    // Test to ensure the advices array is not empty.
    test('advices array should not be empty', () => {
        // Check that the length of the advices array is greater than zero.
        expect(advices.length).toBeGreaterThan(0);
    });

    // Test to ensure the subjects array contains all expected values.
    test('subjects array should contain specific values', () => {
        // Define the expected values for the subjects array.
        const expectedSubjects = [
            "Your next 10 days",
            "Your journey",
            "Your life",
            "Life",
            "The universe"
        ];
        // Check that the subjects array contains all expected values.
        expect(subjects).toEqual(expect.arrayContaining(expectedSubjects));
    });

    // Test to ensure the actions array contains all expected values.
    test('actions array should contain specific values', () => {
        // Define the expected values for the actions array.
        const expectedActions = [
            "will be amazing",
            "is full of joy",
            "holds great adventure",
            "will revolve around dogs",
            "is full of daily surprises",
            "is filled with rainy days"
        ];
        // Check that the actions array contains all expected values.
        expect(actions).toEqual(expect.arrayContaining(expectedActions));
    });

    // Test to ensure the advices array contains all expected values.
    test('advices array should contain specific values', () => {
        // Define the expected values for the advices array.
        const expectedAdvices = [
            "so stay positive",
            "keep your rain clothes on",
            "believe in yourself",
            "be friendly to all living things",
            "make a joke every day",
            "and do a good deed every day"
        ];
        // Check that the advices array contains all expected values.
        expect(advices).toEqual(expect.arrayContaining(expectedAdvices));
    });
});
