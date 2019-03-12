const router = require('express').Router()
const Pet = require('../models/Pet')
const uploadCloud = require('../helpers/cloudinary')

const isAuth = (req, res, next) =>
		req.isAuthenticated()
				? next()
				: res.status(401).json({ message: 'Unauthorized'})

router.get('/lost', (req, res, next)=>{
  Pet.find()
  .then(pets=>res.status(200).json(pets))
  .catch(e=>console.log(e))
})

router.post('/flyer', uploadCloud.single('picture'), isAuth, (req, res, next)=>{
  Pet.register({ ...req.body, petPhotos: req.file.url, rescuedBy:req.user._id })
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