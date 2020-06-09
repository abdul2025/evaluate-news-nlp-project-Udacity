var path = require('path');
const express = require('express');
// const mockAPIResponse = require(path.join(__dirname, 'mockAPI.js'));
var bodyParser = require('body-parser');
var cors = require('cors');
const aylien = require('aylien_textapi');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
// to use json
app.use(bodyParser.json()); // this strict - only parse object and arrays
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

app.get('/', function (req, res) {
	// res.sendFile('dist/index.html');
	// console.log(path.join(__dirname, '../../dist/index.html'));
	res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});
// console.log(path.resolve('src/client/views/index.html'));

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
	console.log('Example app listening on port 8081!');
});

// app.get('/test', function (req, res) {
// 	res.send(mockAPIResponse);
// });

app.post('/nlp', function (req, res) {
	console.log('there is a request');
	textapi.sentiment(
		{
			text: `${req.body.value}`,
		},
		function (error, response) {
			if (error === null) {
				res.send(response);
			} else {
				res.send(error);
				console.log(error);
			}
		}
	);
});
