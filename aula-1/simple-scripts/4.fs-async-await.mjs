import { readFile } from 'node:fs/promises'

console.log('Leyendo el primer archivo')
const text = await readFile('./aula-1/simple-scripts/archivo.txt', 'utf-8')
console.log('primer texto: ', text)
console.log('------> Haciendo cosas mientras se lee el primer archivo')

console.log('Leyendo el segundo archivo')
const secondText = await readFile('./aula-1/simple-scripts/archivo2.txt', 'utf-8')
console.log('segundo texto:', secondText)
