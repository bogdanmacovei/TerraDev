module.exports = function (app, auth, dirname) {
	app.get ('/', auth.isAuth, function (req, res) {
		res.sendFile (dirname + '/views/index.html');
	});

	app.get ('/register', auth.isNotAuth, function (req, res) {
		res.sendFile (dirname + '/views/register.html');
	});

	app.get ('/login', auth.isNotAuth, function (req, res) {
		res.sendFile (dirname + '/views/login.html');
	});

	app.get('/team.html', auth.isAuth, function (req, res) {
		res.sendFile (dirname + '/views/team.html');
	});

	app.get('/profile.html', auth.isAuth, function (req, res) {
		res.sendFile (dirname + '/views/profile.html');
	});

	app.get('/post.html', auth.isAuth, function (req, res) {
		res.sendFile (dirname + '/views/post.html');
	});

	app.get('/messages.html', auth.isAuth, function (req, res) {
		res.sendFile (dirname + '/views/messages.html');
	});

	app.get('/style.css', function (req, res) {
		res.sendFile (dirname + '/views/style.css');
	});

	app.get('/stil.css', auth.isAuth, function (req, res) {
		res.sendFile (dirname + '/views/stil.css');
	});

	app.get('/logo.png', function (req, res) {
		res.sendFile (dirname + '/views/logo.png');
	});
}