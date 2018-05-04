// Dependencies
// NPM Modules

var express = require ('express');
var app = express();
var mongoose = require ('mongoose');
var bodyParser = require ('body-parser');
var cookieParser = require ('cookie-parser');
var uuid = require ('node-uuid');
var https = require ('https');

var app = express ();

app.use (cookieParser());
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

require ('./models/usermodel');
var User = mongoose.model ('UserTerraDev');

require ('./models/teammodel');
var Team = mongoose.model ('TeamTerraDev');

var Auth = require ('./modules/auth');
var auth = new Auth(User);

var account = require ('./modules/account');
account (app, auth, mongoose);

var routes = require ('./modules/routes');
routes (app, auth, __dirname);

var userRest = require ('./modules/userrest');
userRest (app, auth, mongoose);

var teamRest = require ('./modules/teamrest');
teamRest (app, auth, mongoose);

var messageRest = require ('./modules/messagerest');
messageRest (app, auth, mongoose);

var messageReplyRest = require ('./modules/messagereplyrest');
messageReplyRest (app, auth, mongoose);

app.use (function (req, res, next) {
	if (res.status (404)) {
    	res.send("404");
  	}
});

// User.find({})
// 	.catch (err => {
// 		console.log (err);
// 	})
// 	.then (result => {
// 		console.log (result);
// 	});

// Team.deleteOne({name: "dadada"})
// 	.catch (err => console.log(err))
// 	.then (() => console.log ('success'));

// User.updateOne({username: 'bogdanmaco'}, {teamDetails: {roles: []}})
// 	.catch (err => console.log (err))
// 	.then (() => console.log ('success'));