// calling the API and updating the message display

document.getElementById('generate-btn').addEventListener('click', async () => {
    try {
        const response = await fetch('./api/message');
        const data = await response.json();
        document.getElementById('message-display').innerText = data.message;
    } catch (error) {
        document.getElementById('message-display').innerText = 'Failed to fetch message.';
        console.log('Error:', error);
    }
});