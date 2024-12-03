import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('./aula-1/simple-scripts/archivo.txt', 'utf-8'),
  readFile('./aula-1/simple-scripts/archivo2.txt', 'utf-8')

]).then(([text, secondText]) => {
  console.log('Primer texto: ', text)
  console.log('Segundo texto: ', secondText)
})

console.log('Haciendo cosas mientras se resuelven las promesas')
