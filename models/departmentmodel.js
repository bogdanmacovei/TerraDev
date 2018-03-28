var mongoose = require('mongoose');

var departmentSchema = new mongoose.Schema({
	name: String,
	registerDate: String
}, {collection: 'DepartmentTerraDev'});

mongoose.model('DepartmentTerraDev', departmentSchema);

