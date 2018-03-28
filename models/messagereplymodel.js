var mongoose = require('mongoose');

var messageReplySchema = new mongoose.Schema({
	idMessage: String,
	userId: String,
	message: String
}, {collection: 'MessageReplyTerraDev'});

mongoose.model ('MessageReplyTerraDev', messageReplySchema);