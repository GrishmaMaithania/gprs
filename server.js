const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// POST /api endpoint
app.post("/api", (req, res) => {
  const { message } = req.body; // Extracting the 'message' from the request body

  // Log the received message on the server console
  console.log("Message received on server:", message);

  // Send a response back to the client
  res.status(200).json({
    status: "success",
    receivedMessage: message,
    response: "Message successfully received on the server!",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
