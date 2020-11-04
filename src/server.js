
//importar lib
const express = require('express');
const path = require('path');
const pages = require('./pages.js');



//iniciando express
const server = express()


server

//utilizar body do req 
.use(express.urlencoded({extended: true}))


//utilizando os arquivos estáticos
.use(express.static('public'))

//configurar template da engine
.set('views', path.join(__dirname,"views"))
.set('view engine','hbs')


//rotas da aplicação
.get('/', pages.index)
.get('/school', pages.school)
.get('/schools', pages.schools)
.get('/create-school', pages.createschool)
.post('/save-school', pages.saveSchool)

//ligar o servidor
server.listen(5500)
