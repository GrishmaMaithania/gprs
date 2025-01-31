require('dotenv').config(); 
const express = require('express');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the GPRS Server!'); 
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
