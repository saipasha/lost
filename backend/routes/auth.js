const router = require('express').Router()
const User = require('../models/User')
const passport = require('passport')
const uploadCloud = require('../helpers/cloudinary')

const isAuth = (req, res, next) =>
		req.isAuthenticated()
				? next()
				: res.status(401).json({ message: 'Unauthorized'})

router.get('/logout',isAuth, (req, res) => {
	req.logout()
	req.session.destroy((err) => {
		if(!err) {
			res.status(200).clearCookie('connect.sid', {path: '/'}).json({message: "Logged Out"})
		}
	})
})

router.post('/login', passport.authenticate('local'), (req, res, next) => {
	console.log(req)
	res.status(200).json(req.user)
})

router.post('/signup', uploadCloud.single('picture'), (req, res, next) => { 
	
	 User.register({ ...req.body, profilePhoto: req.file.url }, req.body.password)
			.then(user => {
				console.log(...req.body)
				res.status(201).json(user)
			}
				)
			.catch(err => res.json(err))
})

router.get('/profile', isAuth, (req, res, next) => {
	res.status(200).json(req.user)
})

module.exports = router