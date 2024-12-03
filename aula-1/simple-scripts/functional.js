// Higher order function o función de orden superior que retorna una función
// Esta es una función pura
function makeAdjectifier (adjective) {
  return function (string) {
    return adjective + ' ' + string
  }
}

const coolifier = makeAdjectifier('cool')
const result = coolifier('conference')

console.log(result)
// En el estilo funcional no se itera, se utiliza map(), reduce() o filter
