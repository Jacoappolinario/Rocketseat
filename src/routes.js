const express = require('express')
const routes = express.Router()
const Rocketseat = require('./app/controller/RocketseatController')

routes.get('/', function(req, res) {
    return res.render('layout.njk')
})

routes.get('/rocketseat/dashboard', Rocketseat.dashboard)
module.exports = routes