// Higher order function o función de orden superior que retorna una función
// Esta es una función pura 
function makeAdjectifier (adjective) {
    return function (string) {
        return adjective + "" + string;
    };
}

var coolifier = makeAdjectifier('cool');
coolifier('conference')

var coolifier = function (string) {
    return adjective + " " + string
}

// En el estilo funcional no se itera, se utiliza map(), reduce() o filter