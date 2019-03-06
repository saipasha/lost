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
	species: {
		type: String,
		required: "Cada mascota necesita una especie",
		enum: ["Perro", "Gato", "Hurón"],
	},
	size: {
		type: String,
		required: "Cada mascota necesita un tamaño aproximado",
		enum: ["Pequeño", "Mediano", "Grande", "Gigante"],
	},
	careTaker: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	description: {
		type: String,
		required: "Cada mascota necesita una descripción"
	},
	characteristics: [{
		type: String,
		enum: ["Amigable con Otros Animales", "Amigable con Perros", "Amigable con Humanos", "Suelta Pelo", "Limpio", "Operado", "Juguetón", "Energético", "Pasivo", "Agresivo", "Con Cataratas", "En Entrenamiento", "En Rehabilitación", "Condición Inusual"],
		required: "Cada mascota necesita al menos una característica que lo distinga"
	}],
	humanAppointments: [{
		type: Schema.Types.ObjectId,
	}],
	adopted: {
		type: Boolean,
		default: false,
	},
	lost: {
		type: Boolean,
		default: false,
	},
	newOwner: {
		type: Schema.Types.ObjectId,
	},
	petTrainingCentre: {
		type: Schema.Types.ObjectId,
	},
	petClinic: {
		type: Schema.Types.ObjectId,
	},
},{timestamps:true})

module.exports = mongoose.model('Pet', petSchema)