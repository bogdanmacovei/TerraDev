module.exports = function(app, auth, mongoose) {
	var Department = mongoose.model ('DepartmentTerraDev');

	app.post('/createDepartment', function(req, res){
		var departmentTemp = new Department(req.body);
		departmentTemp.save();
		req.end();
	});

	app.get('/findAllDepartments', function(req, res){
		Department.find({})
			.catch (err => {
				console.log (err);
			})
			.then (result => {
				res.send (result);
			});
	});

	app.get('/findDepartmentByName/:departmentName', function(req, res){
		Department.find({name: req.params.departmentName})
			.catch (err => {
				console.log(err);
			})
			.then (result => {
				res.send(result);
			});
	});

	app.get('/findDepartmentById/:id', function(req, res){
		Department.find({'_id': req.params.id})
			.catch (err => {
				console.log(err);
			})
			.then (result => {
				res.send(result);
			});
	});

	app.get('/deleteDepartmentById/:id', function(req, res){
		Department.deleteOne({'_id': req.params.id})
			.catch(err => {
				console.log(err);
			})
			.then(() => {
				console.log ('Department deleted successfully');
			});
	});
}