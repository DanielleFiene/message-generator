// holds the main function to generate messages

// Importing the data arrays containing subjects, actions, and advices these arrays will be used to construct randomized messages.
const { subjects, actions, advices } = require('./data');
// Importing the utility function that selects a random element from an array.
const { getRandomElement } = require('./utils');

// Function to generate a random message by combining elements from the imported arrays.
// This function randomly selects one element from each of the subjects, actions, and advices arrays.
// It then concatenates these elements into a single string that represents the message.
function generateRandomMessage() {
    // Select a random subject from the subjects array.
    const subject = getRandomElement(subjects);
    // Select a random action from the actions array.
    const action = getRandomElement(actions);
    // Select a random piece of advice from the advices array.
    const advice = getRandomElement(advices);
    // Return the constructed message as a single string.
    return `${subject} ${action} ${advice}`;
}

// Exporting the generateRandomMessage function so it can be used in other modules.
// This allows other parts of the application, such as API endpoints or front-end code,
// to access and invoke the message generation functionality.
module.exports = { generateRandomMessage };
