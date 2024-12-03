const fs = require('node:fs')
const fsp = require('node:fs/promises')

fs.readdir('./', (err, files) => {
  if (err) {
    console.log('Ha habido un error con la operación!')
    return
  }

  files.forEach((file) => {
    console.log(file)
  })
})

fsp.readdir('./')
  .then(files => {
    files.forEach(file => {
      console.log(file)
    })
  })
  .catch((err) => {
    console.error('Error al leer el directorio: ', err)
  })
