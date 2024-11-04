// holds utility functions

// function to select a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

//exporting the function
module.exports = {getRandomElement};