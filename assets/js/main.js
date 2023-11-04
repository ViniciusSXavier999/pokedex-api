/**PRIMEIRA COISAS QUE PRECISAMOS É DA URL QUE VAMOS CHAMAR */


const offset = 0 
const limit = 10

const url = `https://pokeapi.co/api/v2/pokemon?offset={offset}&limit=${limit}`

// Iniciando a requisição
fetch(url).then(function(responsee) {
    console.log(responsee)
})

const x = 10 + 10
console.log(x)