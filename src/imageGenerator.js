const fetch = require('node-fetch'); // Import node-fetch for API calls

async function fetchRandomNatureImage() {
  const UNSPLASH_API_KEY = process.env.UNSPLASH_API_KEY; // Load the Unsplash API key from .env
  const url = `https://api.unsplash.com/photos/random?query=nature&client_id=${UNSPLASH_API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }

    const data = await response.json();
    return data.urls.small; // Return the small-sized image URL
  } catch (error) {
    console.error('Error fetching Unsplash image:', error);
    return null; // Return null if an error occurs
  }
}

module.exports = { fetchRandomNatureImage };
