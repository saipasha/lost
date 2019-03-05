
let passport = require('passport')
let Human = require('../models/User')

passport.use(Human.createStrategy())
passport.serializeUser(Human.serializeUser())
passport.deserializeUser(Human.deserializeUser())

module.exports = passport
