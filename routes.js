const express = require('express')
const route = express.Router()
const homeController = require('./src/controller/homeController')
const contatoController = require('./src/controller/contatoController')

//pagina inicial
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)
//contato
route.get('/contato', contatoController.contatoController)

module.exports = route
