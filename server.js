const express = require('express');
const path = require('path');
const cors = require('cors');

// Import routes
const jobs = require('./routes/api/jobs');

const app = express();

app.options('*', cors())
app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use('/api/jobs', jobs);
app.use(cors());


// Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static('client/build'));


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})

// Uses port 80 on deployed server or port 5000 locally
const port = 80;

app.listen(port, () => console.log(`Server running on port ${port}`));