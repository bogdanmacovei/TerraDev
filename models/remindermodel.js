var mongoose = require('mongoose');

var reminderSchema = new mongoose.Schema({
	forCategory: String,
	forCategoryId: String,
	mainSubject: String,
	description: String
}, {collection: 'ReminderTerraDev'});

mongoose.model ('ReminderTerraDev', reminderSchema);