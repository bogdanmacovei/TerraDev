module.exports = function(app, auth, mongoose) {
	var User = mongoose.model ('UserTerraDev');
	var Team  = mongoose.model('TeamTerraDev');

	app.post('/createTeam', function(req, res){
		var teamTemp = new Team(req.body);
		teamTemp.save();
	});

	app.get('/findAllTeams', function(req,res){
		Team.find({})
			.select('-users')
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send(result);
			});
	});

	app.get('/findTeamById/:idTeam', function(req, res){
		Team.find({'_id' : req.params.idTeam})
			.catch(err =>{
				console.log(err);
			})
			.then(result =>{
				res.send(result)''
			});
	});

	app.get('/findTeamByName/:teamToFind', function(req, res){
		Team.find({name: req.params.teamToFind})
			.catch(err =>{
				console.log(err);
			})
			.then(result =>{
				res.send(result);
			});
	});

	app.put('/updateTeam', function(req, res) {
		Team.updateOne( req.body.find, req.body.replace)
			.catch(err => {
				console.log(err);
			})
			.then(() => {
				console.log('Success updated Team');
			});
	});

	app.delete('/deleteTeamById/: id', function(req, res){
		Team.deleteOne({'_id': req.params.id})
			.catch(err => {
				console.log(err);
			})
			.then(() => {
				console.log ('Succes deleted Team');
			});
	});
};


