const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args)); // Import node-fetch for API calls

async function fetchRandomNatureImage() {
  const UNSPLASH_API_KEY = process.env.UNSPLASH_API_KEY; // Load the Unsplash API key from .env
  const url = `https://api.unsplash.com/photos/random?query=nature&client_id=${UNSPLASH_API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched image URL:", data[0]?.urls?.small); // Log the image URL
    return data[0]?.urls?.small; // Return the image URL from the response
  } catch (error) {
    console.error('Error fetching Unsplash image:', error);
    return null;
  }
}

module.exports = { fetchRandomNatureImage };
