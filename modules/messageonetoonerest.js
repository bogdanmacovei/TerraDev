module.exports = function (app, auth, mongoose) {
	var MessageOne = mongoose.model ('MessageOneTerraDev');

	app.post ('/createMessageOne', function (req, res) {
		var MessageOneTemp = new MessageOne(req.body);
		MessageOneTemp.save();
		res.end();
	});

	app.get('/findAllMessageOne', function (req, res) {
		MessageOne.find({})
			.catch (err => {
				console.log(err);
			})
			.then (result => {
				res.send(result);
			});
	});

	app.get('/findMessageOneById/:idMessageOne', function (req, res) {
		MessageOne.find({_id: req.params.idMessageOne})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send (result);
			});
	});

	app.get('/findMessageOneByGroup/:group', function (req, res) {
		MessageOne.find({groupId: req.params.group}).sort({date: 1})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send (result);
			});
	});


}