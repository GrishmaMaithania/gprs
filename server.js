const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Handle POST requests to the root
app.post('/', (req, res) => {
    const { message } = req.body;
    console.log('Message received on server:', message);
    res.status(200).json({
        status: 'success',
        receivedMessage: message,
        response: 'Message successfully received on the server!',
    });
});

// Handle GET requests to the root
app.get('/', (req, res) => {
    res.send('Welcome to the server! ');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on Port:${PORT}`);
});
