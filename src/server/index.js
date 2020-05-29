var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
var bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
app.use(cors());
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
	// res.sendFile('dist/index.html')
	res.sendFile(path.resolve('src/client/views/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
	console.log('Example app listening on port 8081!');
});

app.get('/test', function (req, res) {
	res.send(mockAPIResponse);
});
