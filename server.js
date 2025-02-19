const express = require('express');
const bodyParser = require('express'); // Middleware to parse JSON

const app = express();
const PORT = 3000;

// Middleware to parse incoming requests as JSON
app.use(express.json());

// Handle POST requests
app.post('/', (req, res) => {
    const { message } = req.body;
    console.log('Message received on server:', message);
    res.status(200).json({
        status: 'success',
        receivedMessage: message,
        response: 'Message successfully received on the server!',
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
