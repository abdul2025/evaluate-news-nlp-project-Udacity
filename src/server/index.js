const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
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

const textapi = new aylien({
	application_id: process.env.API_ID,
	application_key: process.env.API_KEY,
});

/// no need for request here becouse we using in the above static express
// app.get('/', function (req, res) {
// 	res.sendFile(path.join(process.cwd(), '/dist/index.html'));
// });

// designates what port the app will listen to for incoming requests
const port = process.env.PORT || 8000;
app.listen(port, function () {
	console.log('Example app listening on port 8000!');
});

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
