module.exports = function(app, auth, mongoose) {
	var Reminder = mongoose.model('ReminderTerraDev');

	app.post('/createReminder', function(req, res){
		var reminderTemp = new Reminder(req.body);
		reminderTemp.save();
		res.end();
	});

	app.get('/findAllReminders', function(req, res){
		Reminder.find({})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send (result);
			});
	});

	app.get('/findReminderByCategoryName/:categoryName', function(req, res){
		Reminder.find({forCateogry: req.params.categoryName})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send (result);
			});
	});

	app.get('/findReminderByCategoryId/:categoryId', function(req, res){
		Reminder.find({forCategoryId: req.params.categoryId})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send (result);
			});
	});

	app.get('/findReminderBySubject/:subject', function(req, res){
		Reminder.find({mainSubject: req.params.subject})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send (result);
			});
	});

	app.get('/findReminderById/:id', function(req, res){
		Reminder.find({'_id': req.params.id})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send (result);
			});
	});

	app.get('/deleteReminderById/:id', function(req, res){
		Reminder.deleteOne({'_id': req.params.id})
			.catch (err => {
				console.log (err);
			})
			.then (() => {
				console.log ('Reminder deleted successfully');
			});
	});
};