module.exports = function(app, auth, mongoose){
	var User = mongoose.model('UserTerraDev');
	var Activty = mongoose.model('ActivityTerraDev');
	var Team = mongoose.model('TeamTerraDev');

	app.post('/createActivity', function(req, res) {
		var activityTemp = new Activity(req.body);
		activityTemp.save();
	});

	app.get('/findAllActivities', function(req, res) {
		Activity.find({})
			.catch(err => {
				console.log(err);
			})
			.then(result => {
				res.send(result);
			});
	});

	app.get('/findActivityById/:idActivity', function(req, res) {
		Activity.find({'_id': req.params.idActivity})
			.catch(err => {
				console.log(err);
			})
			.then(result => {
				res.send(result);
			});
	});

	app.get('/findActivitiesForCategory/:categoryName', function(req, res) {
		Activity.find({"forCategory": req.params.categoryName})
			.catch(err =>{
				console.log(err);
			})
			.then(result =>{
				res.send(result);
			});
	});

	app.get('/findActivitiesForCategoryId/:categoryId', function(req, res) {
		Activity.find({"forCategoryId": req.params.categoryId})
			.catch(err =>{
				console.log(err);
			})
			.then(result =>{
				res.send(result);
			});
	});

	app.post('/updateActivity', function(req, res) {
		Activity.updateOne(req.body.find, req.body.replace)
			.catch(err => {
				console.log(err);
			})
			.then(() => {
				console.log('Success update activity');
			});
	});

	app.get('/deleteActivityById/:idActivity', function(req, res) {
		Activity.deleteOne({'_id': req.params.idActivity})
			.catch(err => {
				console.log(err);
			})
			.then(() => {
				console.log('Success deleted activity by id');
			});
	});

	app.get('/deleteActivityBySubject/:subjectActivity', function(req, res) {
		Activity.deleteOne({'mainSubject': req.params.subjectActivity})
			.catch(err => {
				console.log(err);
			})
			.then(() => {
				console.log('Success deleted activity by subject')
			});
	});

}