// holds the main function to generate messages

//importing the data from data and utils
const {subjects, actions, advices} = require('./data');
const {getRandomElement} =  require('./utils');

// function to generate random message
function generateRandomMessage() {
    const subject = getRandomElement(subjects);
    const action = getRandomElement(actions);
    const advice = getRandomElement(advices);
    return `${subject} ${action} ${advice}`;
}

module.exports = {generateRandomMessage};