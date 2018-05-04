module.exports = function (app, auth, mongoose) {
	var Message = mongoose.model ('MessageTerraDev');

	app.post ('/createMessage', function (req, res) {
		var messageTemp = new Message(req.body);
		messageTemp.save();
		res.end();
	});

	app.get('/findAllMessages', function (req, res) {
		Message.find({})
			.catch (err => {
				console.log(err);
			})
			.then (result => {
				res.send(result);
			});
	});

	app.get('/findMessageById/:idMessage', function (req, res) {
		Message.find({_id: req.params.idMessage})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send (result);
			});
	});

	app.get('/findMessageBySubject/:subject', function (req, res) {
		Message.find({subject: req.params.subject})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send (result);
			});
	});

	app.get ('/findMessageForCategory/:category', function (req, res) {
		Message.find({forCategory: req.params.category})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send (result);
			});
	});

	app.get ('/findMessageForCategoryId/:categoryId', function (req, res) {
		Message.find({forCategoryId: req.params.categoryId})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send (result);
			});
	});

	app.get ('/findMessageByUserId/:userId', function (req, res) {
		Message.find({userId: req.params.userId})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send (result);
			});
	});

	app.post ('/updateMessage', function (req, res) {
		Message.updateOne (req.body.find, req.body.replace)
			.catch (err => {
				console.log (err);
			})
			.then (() => {
				console.log ('Succes');
			});
	});

	app.get ('/deleteMessageByUserId/:userId', function (req, res) {
		Message.deleteOne({userId: req.params.userId})
			.catch (err => {
				console.log (err);
			})
			.then (() => console.log ('succes'));
	});

	app.get ('/deleteMessageById/:id', function (req, res) {
		Message.deleteOne({_id: req.params.id})
			.catch (err => {
				console.log (err);
			})
			.then (() => console.log ('success'));
	});

}