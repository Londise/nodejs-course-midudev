async function hasContent(filePath) {
    try{
        console.log('--> Obteniendo los stats')
        const stats = fsp.stat(filePath)
        return stats.size > 0 // devuelve true si tiene contenido, false si no.
    }
    catch (err) {
        console.error('Hubo un error al analizar el archivo: ', err)
    }
}

hasContent('./archivo.txt').then((result) => console.log(result))
console.log('Viendo si la llamada bloquea el código')

async function testingConditionalOnReturn(a, b) {
    console.log('--> Haciendo cositas antes del retorno')
    return a > b
}

testingConditionalOnReturn(5, 2).then((result) => console.log(result))


console.log('--> Haciendo cosas mientras se ejecutan las funciones asíncronas')