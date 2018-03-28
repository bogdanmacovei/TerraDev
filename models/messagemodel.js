var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
	userId: String,
	forCategory: String,
	forCategoryId: String,
	subject: String,
	message: String
}, {collection: 'MessageTerraDev'});

mongoose.model ('MessageTerraDev', messageSchema);