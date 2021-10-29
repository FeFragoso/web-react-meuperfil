const express = require('express')
const path = require('path')
const app = express()
const porta = process.env.PORT || 3000

app.use(express.static("front"));

app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, '/front/meuPerfil.html'))
})

app.listen(porta, ()=> {console.log("Servidor Rodando")})