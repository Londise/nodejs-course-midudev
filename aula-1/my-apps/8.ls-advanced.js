// Es importante saber que este ls depende del local de ejecución y no de donde está
// este script, esto se debe al readdir y del módulo fs.
// Ejemplo: "node my-apps/8.ls-advanced.js . " te va a devolver info de lo de dentro de CURSO-NODE

const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch (err) {
    console.error(pc.red(`Hubo un problema al leer el directório: ${folder}`))
    process.exit(1)
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath)
    } catch {
      console.error(pc.red(`No se pudo leer el archivo: ${file}`))
      process.exit(1)
    }

    const fileType = stats.isDirectory() ? 'd' : 'f' // d -> directorio y f -> fichero
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    return `${fileType} ${pc.blue(file.padEnd(30))} ${pc.green(
      fileSize.padStart(10)
    )} ${pc.yellow(fileModified)}`
  })

  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach((fileInfo) => console.log(fileInfo))
}

ls(folder)
