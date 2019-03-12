const router = require('express').Router()
const Pet = require('../models/Pet')
const uploadCloud = require('../helpers/cloudinary')

router.get('/lost', (req, res, next)=>{
  res.status(200).json(req)
})

module.exports = router