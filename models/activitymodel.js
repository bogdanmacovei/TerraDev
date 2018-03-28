var mongoose = require('mongoose');

var activitySchema = new mongoose.Schema({
	forCategory: String,
	forCategoryId: String,
	mainSubject: String,
	description: String,
	creationDate: String,
	deadline: String
}, {collection: 'ActivityTerraDev'});

mongoose.model('ActivityTerraDev', activitySchema);