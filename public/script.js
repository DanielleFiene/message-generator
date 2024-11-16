// calling the API and updating the message display

// Attach an event listener to the 'generate-btn' button.
// This listener waits for a click event to trigger the message generation process.
document.getElementById('generate-btn').addEventListener('click', async () => {
    try {
        // Send a GET request to the API endpoint to fetch a random message.
        const response = await fetch('./api/message');
        
        // Check if the response is successful (status code 200-299).
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response data to extract the message.
        const data = await response.json();

        const imageElement = document.getElementById('image-display');
        imageElement.src = data.image;
        imageElement.alt = "Random Nature Image";

        // Update the inner text of the 'message-display' element with the fetched message.
        // This displays the random message to the user.
        document.getElementById('message-display').innerText = data.message;
    } catch (error) {
        // If an error occurs during the fetch process or if the response is not ok,
        // display an error message in the 'message-display' element.
        document.getElementById('message-display').innerText = 'Failed to fetch message.';
        
        // Log the error to the console for debugging purposes.
        console.log('Error:', error);
    }
});
