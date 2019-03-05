const mongoose = require('mongoose')
const PLM = require('passport-local-mongoose')
const Schema = mongoose.Schema

let humanSchema = new Schema({
	email: {
		type: String,
		required: "Debes de tener un email activo para poder registrarte",
		unique: "Tu email ya está registrado",
	},
	name: {
		type: String,
		required: "Debes de ingresar tu nombre",
	},
	lastName: {
		type: String,
		required: "Debes de ingresar tu apellido",
	},
	phone: {
		type: Number,
		required: "Debes de agregar un numero de telefono",
	},
	profilePhoto: {
		type: String,
		required: "Debes subir una foto de perfil",
	},
	petAppointments: [{
		type: Schema.Types.ObjectId,
	}],
	petFlyers: [],
	address: {
		location: [],
	},
	homePhotos: [{
		type: String,
		required: false,
	}],
},{ timestamps: true })

humanSchema.plugin(PLM, { usernameField: 'email' })
module.exports = mongoose.model('Human', humanSchema)