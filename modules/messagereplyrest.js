module.exports = function (app, auth, mongoose) {
	var MessageReply = mongoose.model ('MessageReplyTerraDev');

	app.post ('/createReplyMessage', function (req, res) {
		var messageTemp = new MessageReply(req.body);
		messageTemp.save();
		res.end();
	});

	app.get('/findAllReplyMessages', function (req, res) {
		MessageReply.find({})
			.catch (err => {
				console.log(err);
			})
			.then (result => {
				res.send(result);
			});
	});

	app.get('/findReplyMessageById/:idReplyMessage', function (req, res) {
		MessageReply.find({_id: req.params.idReplyMessage})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send (result);
			});
	});

	app.get ('/findReplyMessageByUserId/:userId', function (req, res) {
		MessageReply.find({userId: req.params.userId})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send (result);
			});
	});

	app.post ('/updateReplyMessage', function (req, res) {
		MessageReply.updateOne (req.body.find, req.body.replace)
			.catch (err => {
				console.log (err);
			})
			.then (() => {
				console.log ('Succes');
			});
	});

	app.get ('/deleteReplyMessageByUserId/:userId', function (req, res) {
		MessageReply.deleteOne({userId: req.params.userId})
			.catch (err => {
				console.log (err);
			})
			.then (() => console.log ('succes'));
	});

	app.get ('/deleteReplyMessageById/:id', function (req, res) {
		MessageReply.deleteOne({_id: req.params.id})
			.catch (err => {
				console.log (err);
			})
			.then (() => console.log ('success'));
	});
}