const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000; // Use Render's provided port

// Middleware to parse JSON
app.use(bodyParser.json());

// Add a GET route for '/'
app.get('/', (req, res) => {
    res.send('Welcome to the GPRS Server!'); // Change this message if needed
});

// Endpoint to handle POST requests
app.post('/api', (req, res) => {
    const { message } = req.body;
    console.log('Received message:', message);
    res.status(200).json({ status: 'success', received: message });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
