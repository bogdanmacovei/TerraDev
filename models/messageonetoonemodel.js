var mongoose = require('mongoose');

var messageOneSchema = new mongoose.Schema({
	groupId: String,
	message: String,
	date: String,
	sender: String
}, {collection: 'MessageOneTerraDev'});

mongoose.model('MessageOneTerraDev', messageOneSchema);