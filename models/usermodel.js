var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	general: {
		firstName: String,
		lastName: String,
		email: String,
		birthdate: String,
		city: String
	},
	professional: {
		education: {
			actual: String,
			lastDegree: String
		},
		jobHistory: [{
			company: String,
			position: String,
			startDate: String,
			finishDate: String
		}],
		hobbies: [{
			hobby: String,
			description: String
		}],
		awards: [{
			award: String,
		}],
		projects: [{
			project: String,
			startDate: String,
			finishDate: String,
			details: String
		}],
		skills: [{
			skill: String,
			level: String
		}]
	},
	teamDetails: {
		roles: [{
			idTeam: String,
			position: String
		}]
	},
	linkProfilePicture: String,
	username: String,
	password: String,
	loginNr: Number,
	authDate: String,
	lastLogin: String,
	hasAccount: Boolean,
	isConfirmed: Boolean,
	sesstoken: {
		type: String,
		default: ""
	}
}, {collection: 'UserTerraDev'});

mongoose.model ('UserTerraDev', userSchema);