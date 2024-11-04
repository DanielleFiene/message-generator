// index.js serves as server entry point and organizes the code

const express = require('express');
const {generateRandomMessage} = require('./src/generator');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/message', (req, res) => {
    res.json({message: generateRandomMessage()});
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

