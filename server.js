const express = require('express');
// const connection = require('./src/utils/db')
const app = express();
const port = process.env.PORT || 8081;
const scriptsRoutes =require('./src/routes/scripts.js')
const middlewareLogRequest = require("./src/middleware/log.js")
const connection = require('./src/utils/db.js')

// Middleware to parse incoming JSON requests
app.use(middlewareLogRequest)
app.use(express.json())

app.use('/script', scriptsRoutes);

// Example route that returns a JSON response
// app.get('/', (req, res) => {
//   res.json({ message: 'Hello, world!' });
// });

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});

//

app.get('/', (req, res) => {
    res.send('Hello, World!');

}) 