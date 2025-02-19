require('dotenv').config(); 
const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle CORS and JSON parsing
app.use(cors());
app.use(express.json());

// POST route to handle message
app.post('/api', (req, res) => {
    const { message } = req.body; 
    console.log('Message received on server:', message);
    res.status(200).json({
        status: 'success',
        receivedMessage: message,
        response: 'Message successfully received on the server!',
    });
});

// GET route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the GPRS Server!'); 
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
