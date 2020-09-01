const express = require('express')
const routes = express.Router()
const Rocketseat = require('./app/controller/RocketseatController')

routes.get('/', function(req, res) {
    return res.redirect('/rocketseat/dashboard')
})

routes.get('/rocketseat/dashboard', Rocketseat.dashboard)
routes.get('/rocketseat/dashboard/:id', Rocketseat.course)
module.exports = routes