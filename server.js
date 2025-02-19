const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Handle POST requests to '/'
app.post('/', (req, res) => {
    const { message } = req.body;
    console.log('Message received on server:', message);
    res.status(200).json({
        status: 'success',
        receivedMessage: message,
        response: 'Message successfully received on the server!',
    });
});

// Handle GET requests to '/'
app.get('/', (req, res) => {
    res.send('Welcome to the server! Use POST / to send a message.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
