const express = require('express');
const path = require('path');
const cors = require('cors');

// Import routes
const jobs = require('./routes/api/jobs');

const app = express();

app.use('/api/jobs', jobs);
app.use(cors());

// Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }

app.use(express.static('client/build'));


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})

// Uses port 80 on deployed server or port 5000 locally
const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));