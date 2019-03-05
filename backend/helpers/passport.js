let Human = require('../models/Human')
let passport = require('passport')

passport.use(Human.createStrategy())

passport.serializeUser(Human.serializeUser())
passport.deserializeUser(Human.deserializeUser())

module.exports = passport