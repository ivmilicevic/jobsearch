const express = require('express');

// Import routes
const jobs = require('./routes/api/jobs');

const app = express();


app.use('/api/jobs', jobs);

// Uses port 80 on deployed server or port 5000 locally
const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));