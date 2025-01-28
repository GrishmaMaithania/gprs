const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Endpoint to handle POST requests
app.post('/api', (req, res) => {
    // Log the message received from the Android app
    const { message } = req.body;  // Extract the 'message' from the request body
    console.log('Received message:', message);  // Log the message to the server console

    // Respond back to the Android app
    res.status(200).json({ status: 'success', received: message });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
