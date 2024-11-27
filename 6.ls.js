const fs = require('node:fs')
const fsp = require('node:fs/promises')

fs.stat('content') // verifica si existe o no existe el contenido de un archivo

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
    .then((files) => {
        console.log(files)
    })

    .catch((err) => {
      console.error('Error al leer el directorio: ', err)  
    })

// Es lo mismo
fsp.readdir('./').then((files) => {console.log(files)}).catch((err) => {console.error(err)})



