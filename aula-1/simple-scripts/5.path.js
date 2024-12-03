const path = require('node:path')

// Barra separadora de carpetas según SO
console.log(path.sep)

// unir rotas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// nombre del archivo
const base = path.basename('/tmp/londise/password.txt')
console.log(base)

// nombre del archivo sin la extensión
const fileName = path.basename('/tmp/londise/password.txt', '.txt')
console.log(fileName)

// devuelve la extensión del archivo
const extension = path.extname('/tmp/londise/image.jpg')
console.log(extension)
