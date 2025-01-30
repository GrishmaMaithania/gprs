const express = require('express');
const router = express.Router();

// POST /api route
router.post('/', (req, res) => {
    const { message } = req.body; // Extracting the 'message' from the request body

    // Log the received message on the server console
    console.log('Message received on server:', message);

    // Send a response back to the client
    res.status(200).json({
        status: 'success',
        receivedMessage: message,
        response: 'Message successfully received on the server!',
    });
});

module.exports = router;
