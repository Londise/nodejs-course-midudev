// argumentos de entrada en la terminal
console.log(process.argv)

// podemos controlar los eventos del proceso
process.on('exit', () => {
    // limpiar los recursos, limpiar la consola, etc etc...
})

// devuelve el directorio actual de trabajo
console.log(process.cwd())

// devuelve la plataforma
console.log(process.platform)

// controlar el proceso y su salida
console.log(process.exit(1))

