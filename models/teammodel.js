var mongoose =  require('mongoose');

var teamSchema = new mongoose.Schema({
	name: String,
	teamLeadId: String,
	registerDate: String,
	departmentId: String
}, {collection: 'TeamTerraDev'});

mongoose.model('TeamTerraDev', teamSchema);

