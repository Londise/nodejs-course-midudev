const express = require('express')
const ditto = require('./ditto.json')

const PORT = process.env.PORT

const app = express()
// Desactiva el framework mostrado en la cabecera (headers)
app.disable('x-powered-by')

// Middleware nativo de express
app.use(express.json())

// Middleware nativo de express desglosado
// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()
//   let body = ''
//   // Escuchar el evento data
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // Mutar la request y meter la información en el req.body
//     req.body = data
//     next()
//   })
// })

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

// La última a la que va a llegar
app.use((req, res) => {
  res.status(404).send('<h1>404 - Not Found</h1>')
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})
