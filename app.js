var express = require ('express');
var mongoose = require ('mongoose');
var bodyParser = require ('body-parser');

var app = express ();

app.use (bodyParser.json());
app.use (bodyParser.urlencoded({extended: true}));

var server = app.listen (process.env.PORT || 8000, function (err, res) {
	if (err)
		throw err;
	console.log ('Connected on port 8000');
});

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/mydb')
	.catch (err => {
		console.log (err);
	})
	.then (() => {
		console.log ('Connected');
	});

app.get ('/', function(req, res) {
	res.sendFile (__dirname + '/index.html');
});

require ('./models/usermodel');
var User = mongoose.model ('UserTerraDev');

var userRest = require ('./modules/userrest');
userRest (app, auth, mongoose);