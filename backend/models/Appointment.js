const mongoose = require('mongoose')
const Schema = mongoose.Schema

let appointmentSchema = new Schema({
	pet: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	human: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
		required: "Ingresa la fecha en la que solicitas la cita",
	},
	address: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	active: {
		type: Boolean,
		default: true,
	},
})

module.exports = mongoose.model('Appointment', appointmentSchema)