require('dotenv').config(); // Load environment variables
const express = require('express');
const { generateRandomMessage } = require('./src/generator');
const { fetchRandomNatureImage } = require('./src/imageGenerator');

const app = express();
const PORT = 3000;

app.use(express.static('public')); // Serve static files from the public directory

// API endpoint to fetch a random message and image
app.get('/api/message', async (req, res) => {
  try {
    const message = generateRandomMessage();
    const image = await fetchRandomNatureImage(); // Fetch a random nature image
    res.json({ message, image }); // Respond with both message and image
  } catch (error) {
    console.error('Error in API:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
