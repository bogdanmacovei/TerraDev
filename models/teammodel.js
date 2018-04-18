var mongoose =  require('mongoose');

var teamSchema = new mongoose.Schema({
	name: String,
	teamLeadId: String,
	registerDate: String,
	departmentId: String,
	users: [{
		userId:String,
		username: String,
		position: String
	}]
}, {collection: 'TeamTerraDev'});

mongoose.model('TeamTerraDev', teamSchema);

