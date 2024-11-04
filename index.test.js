// Import the functions and arrays from index.js
const { getRandomElement, generateRandomMessage, subjects, actions, advices } = require('./index');

describe('Message Generator Tests', () => {
  
  // Test getRandomElement
  test('getRandomElement should return an element from the array', () => {
    const element = getRandomElement(subjects);
    expect(subjects).toContain(element);
  });

  // Test that generateRandomMessage returns a string
  test('generateRandomMessage should return a string', () => {
    const message = generateRandomMessage();
    expect(typeof message).toBe('string');
  });

  // Test that generateRandomMessage contains parts from each array
  test('generateRandomMessage should contain a subject, action, and advice', () => {
    const message = generateRandomMessage();
    
    // Check if the message includes an element from each array
    const subjectFound = subjects.some(subject => message.includes(subject));
    const actionFound = actions.some(action => message.includes(action));
    const adviceFound = advices.some(advice => message.includes(advice));
    
    expect(subjectFound).toBe(true);
    expect(actionFound).toBe(true);
    expect(adviceFound).toBe(true);
  });

  // Optional: Check that generateRandomMessage produces different results
  test('generateRandomMessage should produce different outputs', () => {
    const message1 = generateRandomMessage();
    const message2 = generateRandomMessage();
    expect(message1).not.toBe(message2); // Not guaranteed, but it should often be different
  });
});
