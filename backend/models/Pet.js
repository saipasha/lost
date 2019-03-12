const mongoose = require('mongoose')
const Schema = mongoose.Schema

let petSchema = new Schema ({
	petPhotos: [{
		type: String,
		required: "Cada mascota necesita al menos una fotografía"
	}],
	name: {
		type: String,
		required: "Cada mascota necesita un nombre",
	},
	age: {
		type: Number,
		required: "Cada mascota necesita una edad aproximada",
	},
	size: {
		type: String,
		required: "Cada mascota necesita un tamaño aproximado",
		enum: ["small", "medium", "large", "xlarge"],
	},
	status: [String],
	rescuedBy: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	description: {
		type: String,
		required: "Cada mascota necesita una descripción"
	},
	characteristics: [String],
	givenTo: {
		type: Schema.Types.ObjectId,
	},
},{timestamps:true})

module.exports = mongoose.model('Pet', petSchema)