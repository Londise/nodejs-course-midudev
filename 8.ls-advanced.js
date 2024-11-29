const fs = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch (err) {
        console.error(`Hubo un problema al leer el directório: ${folder}`)
        process.exit(1)
    }

    const filesPromises = files.map(async (file) => {
        const filePath = path.join(folder, file)
        let stats

        try {
            stats = await fs.stat(filePath)
        } catch {
            console.error(`No se pudo leer el archivo: ${file}`)
            process.exit(1)
        }

        const fileType = stats.isDirectory() ? 'd' : 'f' // d -> directorio y f -> fichero
        const fileSize = stats.size.toString()
        const fileModified = stats.mtime.toLocaleString()

        return `${fileType} ${file.padEnd(30)} ${fileSize.padStart(10)} ${fileModified}`
    })

    const filesInfo = await Promise.all(filesPromises)

    filesInfo.forEach(fileInfo => console.log(fileInfo))
}   

ls(folder)

