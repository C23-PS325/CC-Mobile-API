const express = require('express');
const connection = require('./src/utils/db')
const app = express();
const port = process.env.PORT || 3000;


// Middleware to parse incoming JSON requests
app.use(express.json());

// Example route that returns a JSON response
app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});