const express = require('express');
const app = express();

// express middleware
app.use(express.json());

//assign the port
app.listen(3001, 'localhost', () => {
  console.log('Server is running on port 3001!');
});

module.exports = app;
