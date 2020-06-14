var path = require('path');
const express = require('express');

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

app.use(express.static(path.join(process.cwd(), '/dist')));

// const pp = path.parse(__dirname);
// console.log(pp);
// console.log(process.cwd(), '/dist');
// const dirPath = path.join(process.cwd(), '/dist');
// console.log(dirPath);
// console.log(path.resolve('dist/index.html'));
// console.log(`Your API key is ${process.env.API_KEY}`);

const textapi = new aylien({
	application_id: process.env.API_ID,
	application_key: process.env.API_KEY,
});

app.get('*', function (req, res) {
	res.sendFile(path.join(process.cwd(), '/dist/index.html'));
});

// designates what port the app will listen to for incoming requests
const port = process.env.PORT || 8081;
app.listen(port, function () {
	console.log('Example app listening on port 8081!');
});

console.log(process.env.PORT);

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
