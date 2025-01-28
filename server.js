const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

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
