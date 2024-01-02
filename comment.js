// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Set up body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up static folder
app.use(express.static(path.join(__dirname, 'public')));

// Post route for comment form
app.post('/comment', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

// Start server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});