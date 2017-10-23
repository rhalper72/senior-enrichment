'use strict'
const api = require('express').Router()
const db = require('../db')

//setting up the url pathes to my two route files.
api.use('/campuses', require('./routes/campuses'));
api.use('/students', require('./routes/students'));


module.exports = api
