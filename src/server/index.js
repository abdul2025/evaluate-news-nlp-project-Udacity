var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
var bodyParser = require('body-parser');
var cors = require('cors');
const aylien = require('aylien_textapi');
const dotenv = require('dotenv');
dotenv.config();

console.log(__dirname);

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

// console.log(`Your API key is ${process.env.API_KEY}`);

const textapi = new aylien({
	application_id: process.env.API_ID,
	application_key: process.env.API_KEY,
});

// console.log(textapi);
// textapi.sentiment(
// 	{
// 		text: 'John is a very good football player!',
// 	},
// 	function (error, response) {
// 		if (error === null) {
// 			console.log(response);
// 		}
// 	}
// );

app.get('/', function (req, res) {
	// res.sendFile('dist/index.html')
	res.sendFile(path.resolve('src/client/views/index.js'));
});
// console.log(path.resolve('src/client/views/index.html'));

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
	console.log('Example app listening on port 8081!');
});

app.get('/test', function (req, res) {
	res.send(mockAPIResponse);
});
