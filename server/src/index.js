const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db');

// Configuration
const app = express();
const PORT = process.env.PORT || 3000;

// Router Imports
const tweetRouter = require('./routes/api/tweets');

// Middleware
app.use(express.json());
app.use(cors());


// Routing definitions
app.use('/api/tweets', tweetRouter);

app.get('*', (req, res) => {
  return res.status(404).send();
});

// Server start
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
  connectDB();
});