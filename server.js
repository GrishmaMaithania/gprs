require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors'); // Import CORS

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS (This should be before defining routes)
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Import and use the routes
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the GPRS Server!'); // A simple response for testing
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
