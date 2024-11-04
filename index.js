const subjects = ["You", "Your journey", "Your life", "Life", "Universe" ];
const actions = ["will be amazing", "is full of joy", "holds great adventure", "will revolve around dogs", "is full of daily surprises", "is filled with rainy days"];
const advices = ["so stay positive", "keep you rain clothes on", "and believe in yourself", "be friendly to all living things", "make a joke every day", "and do a good deed every day"];

// function to select a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// function to generate random message
function generateRandomMessage() {
    const subject = getRandomElement(subjects);
    const action = getRandomElement(actions);
    const advice = getRandomElement(advices);
    return `${subject} ${action} ${advice}`;
}
// export the function and arrays for testing
module.exports = { getRandomElement, generateRandomMessage, subjects, actions, advices };


// running our small program
console.log(generateRandomMessage());

