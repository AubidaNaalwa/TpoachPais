require('dotenv').config();
const express = require('express'),
api = require('./server/routes/api'),
mongoose = require('mongoose'),
path = require('path'),
app = express(),
PORT = process.env.REACT_APP_PORT || 5000,
URI = process.env.REACT_APP_MONGODB_URI || 'mongodb://localhost/tPaisDB',
API_PATH = require('./src/Constants').API_PATH;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(API_PATH, api);

app.use(express.static('build'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, connectTimeoutMS: 5000, serverSelectionTimeoutMS: 5000 })
.then(function() {
    console.log("Successfully connected to DB.");
})
.catch(function(err) {
    console.log(err.message);
    process.exit(1);
});

app.listen(PORT, function() {
    console.log(`Server is up and running on port: ${PORT}.`);
});