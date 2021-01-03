
const express = require('express')
const path = require('path')
const server = express()
const page = require('./page.js') 

 
server.use(express.urlencoded({ extended: true }))
 
server.use(express.static('public'))

 
 
server.set('views', path.join(__dirname, "views"))
server.set('view engine', 'hbs')

//criando Rotas
 server.get('/', page.index)
 server.get('/cadastro', page.cadastro)
 server.get('/cadastrados', page.cadastrados)
server.get('/create-cadastro', page.createCadastro)
server.post('/save-cadastro', page.saveCadastro)
server.get('/reset_', page.reset_)

//iniciando o servidor
server.listen(3000) 