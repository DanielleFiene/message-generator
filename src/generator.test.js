// tests/generator.test.js

// Importing the function to test and the data arrays needed for validation.
const { generateRandomMessage } = require('../src/generator');
const { subjects, actions, advices } = require('../src/data');

// Grouping tests related to the message generation function using Jest's describe function.
describe('Message Generator Function Tests', () => {
    
    // Test to verify that the output of generateRandomMessage is a string.
    test('generateRandomMessage should return a string', () => {
        const message = generateRandomMessage();
        // Check the type of the message to ensure it is a string.
        expect(typeof message).toBe('string');
    });

    // Test to ensure that the generated message includes a subject, action, and advice from the respective arrays.
    test('generateRandomMessage should contain a subject, action, and advice', () => {
        const message = generateRandomMessage();
        
        // Check if the message includes at least one element from the subjects array.
        const subjectFound = subjects.some(subject => message.includes(subject));
        // Check if the message includes at least one element from the actions array.
        const actionFound = actions.some(action => message.includes(action));
        // Check if the message includes at least one element from the advices array.
        const adviceFound = advices.some(advice => message.includes(advice));
        
        // Assert that the message contains a subject, action, and advice.
        expect(subjectFound).toBe(true);
        expect(actionFound).toBe(true);
        expect(adviceFound).toBe(true);
    });

    // Test to check that generateRandomMessage produces different outputs on consecutive calls.
    test('generateRandomMessage should produce different outputs', () => {
        const message1 = generateRandomMessage();
        const message2 = generateRandomMessage();
        
        // Since the output is random, it's not guaranteed to be different every time,
        // but we expect them to often differ due to the variety in the arrays.
        expect(message1).not.toBe(message2);
    });

    // Test to ensure that the generated message is not an empty string.
    test('generateRandomMessage should not return an empty string', () => {
        const message = generateRandomMessage();
        // Assert that the generated message is not an empty string.
        expect(message).not.toBe('');
    });
});
