const router = require('express').Router()
const Pet = require('../models/Pet')
const uploadCloud = require('../helpers/cloudinary')

const isAuth = (req, res, next) =>
		req.isAuthenticated()
				? next()
				: res.status(401).json({ message: 'Unauthorized'})

router.get('/lost', (req, res, next)=>{
	let querys = Object.keys(req.query);
	let query = {}
	if(querys.length > 0){
		querys.forEach(k=>{
			query[k] = {$regex: req.query[k], $options: "gi"}
		})

		Pet.find(query)
				.then(pets=>{
					return res.status(200).json({pets})
				})
				.catch(e=>console.log(e))
	}

	Pet.find()
			.then(pets=>{
				return res.status(200).json({pets})
			})
			.catch(e=>console.log(e))

})

router.post('/flyer', uploadCloud.array('images'), (req, res, next)=>{
	let {characteristics} = req.body;
	delete req.body.characteristics;
	characteristics = JSON.parse(characteristics);
	characteristics = Object.keys(characteristics).filter(key => {
		if(characteristics[key]) return key;
	});

	let petPhotos = req.files.map(file => {
		return file.secure_url;
	});

  Pet.create({ ...req.body, petPhotos, rescuedBy:"5c87370a5d3eeaab69372793", characteristics })
			.then(pet => {
				res.status(201).json(pet)
			})
			.catch(e => res.json(e))
})

router.get('/lost/:id', (req, res, next)=>{
  Pet.findById(req.params.id)
  .then(pet=>res.status(200).json(pet))
  .catch(e=>console.log(e))
})


router.patch('/flyer/:id', (req, res, next)=>{
  Pet.findByIdAndUpdate(req.params.id)
    .then(pet=>res.status(200).json(pet))
    .catch(e=>console.log(e))
})

module.exports = router