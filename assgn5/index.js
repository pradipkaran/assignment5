const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('your_mongodb_connection_string', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define route
app.get('/', (req, res) => {
  res.send('Welcome to the Products API');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
