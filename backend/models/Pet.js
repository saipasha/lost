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
		enum: ["Pequeño", "Mediano", "Grande", "Gigante"],
	},
	status: [{
		type: String,
		enum: ["Malnutrido", "Flaco", "Estómago Hinchado", "Lastimado de patas traseras", "Lastimado de patas delanteras", "Lastimado del cuerpo", "Señales de Maltrato", "Sin Heridas"]
	}],
	rescuedBy: {
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
	givenTo: {
		type: Schema.Types.ObjectId,
	},
},{timestamps:true})

module.exports = mongoose.model('Pet', petSchema)