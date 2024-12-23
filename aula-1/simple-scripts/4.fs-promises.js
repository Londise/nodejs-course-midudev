// Esto sólo en los módulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo')
fs.readFile('./aula-1/simple-scripts/archivo.txt', 'utf-8')
  .then(text => {
    console.log('primer texto: ', text)
  })

console.log('------> Haciendo cosas mientras se lee el primer archivo')

console.log('Leyendo el segundo archivo')
fs.readFile('./aula-1/simple-scripts/archivo2.txt', 'utf-8')
  .then(text => {
    console.log('segundo texto: ', text)
  })
