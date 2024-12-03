const fs = require('node:fs')

const stats = fs.statSync('./simple-scripts/archivo.txt')

console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size
)