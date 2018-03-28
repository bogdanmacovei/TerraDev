module.exports = function(app, auth, mongoose){
	var User = mongoose.model('UserTerraDev');

	app.get('/findAllUsers', function(req, res){
	User.find({})
		.select('-password')
		.select('-sesstoken')
		.select('-professional')
		.select('-hasAccount')
		.select('-isConfirmed')
		
		.catch(err =>{
			console.log(errus);
		})
		.then(result =>{
			res.send(result);
		});
	});

	app.post('/createUser', function(req, res){
		var userTemp = new User(req.body);
		userTemp.save();
	});

	app.get('/findUserById/:idUser', function(req, res){
		User.find({_id: req.params.idUser})
			.catch(err =>{
				console.log(err);
		})
			.then(result =>{
				res.send(result);
		});
	});

	app.get('/findUserByUsername/:userToFind', function(req, res){
		User.find({username: req.params.userToFind})
			.catch(err =>{
				console.log(err);
			})
			.then(result =>{
				res.send(result);
		});
	});

};