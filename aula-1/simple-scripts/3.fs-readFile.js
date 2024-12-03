const fs = require('node:fs')

// MANERA SÍNCRONA

console.log('Leyendo el primer archivo')
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log(text)

console.log('Haciendo cosas mientras se lee el primer archivo (no se puede)')

console.log('Leyendo el segundo archivo')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log(secondText)

console.log('Haciendo cosas mientras se lee el segundo archivo (no se puede)')

// MANERA ASÍNCRONA

console.log('Leyendo el primer archivo')
fs.readFile('./simple/scripts/archivo.txt', 'utf-8', (err, text) => {
  console.log('primer texto: ', text)
  if (err) {
    console.error(`Hubo un error al leer el archivo: ${err}`)
  }
})

console.log('------> Haciendo cosas mientras se lee el primer archivo')

console.log('Leyendo el segundo archivo')
fs.readFile('./simple/scripts/archivo2.txt', 'utf-8', (err, text) => {
  console.log('segundo texto: ', text)

  if (err) {
    console.error(`Hubo un error al leer el archivo: ${err}`)
  }
})
