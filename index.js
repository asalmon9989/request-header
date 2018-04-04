const express = require('express');
const parser = require('ua-parser-js');
const app = express();

const port = process.env.PORT || 8080;




app.get('/', function(req, res) {

	const clientInfo = {
		ipaddress: req.ip,
		os: ua.os,
		language: req.headers['accept-language']
	};

	
	res.send(clientInfo);
});

app.listen(port);