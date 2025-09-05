const numbers = [0,1,-2,3,-4,-5,6,-7,-8,9,10]

// numbers.forEach((number,index) => {
//     index += 1;
//     console.log(`Numbers[${index}] = ${number}`)
// });

// numbers.forEach(number => {
//     console.log(`O dobro de ${number} é ${number * 2}`)
// })

// numbers.forEach(number => {
//     if (number < 0)
//         console.log(`${number} é negativo`)
//     else if (number > 0)
//         console.log(`${number} é positivo`)
//     else
//         console.log(`${number} é nulo`)
// })

// const double = numbers.map( number => {
//     return number * 2;
// })

// console.log(double)

// const square = numbers.map( number => {
//     return number ** 2;
// })

// console.log(square)

// const negativos = numbers.filter(number => {
//     return number < 0;
// })

// console.log(negativos)

// const ímpares = numbers.filter(number => {
//     return number % 2 !== 0;
// })

// console.log(ímpares)

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })

// console.log(sum)

// const pares = numbers.reduce((acumulador, valor) => {
//     if (valor % 2 === 0) {
//         return acumulador + valor;
//     }
//     return acumulador
// }, 0)

// console.log(pares)

// const temPar = numbers.some(number => {
//     return number % 2 === 0;
// })

// console.log(temPar)

const frutas = ['Laranja', 'Pêra', 'Maçã', 'Abacate', 'Uva']

// const temBanana = frutas.some((fruta, index) => {
//     console.log(`Achei ${fruta} na posição ${index}`)
//     return fruta === 'Banana';
// })

// console.log(temBanana)

// const temNegativo = numbers.some(number => {
//     if (number >= 0)
//         console.log('Número negativo não encontrado')
//     else
//         console.log('Número negativo')
//     return number < 0
// })

// console.log(temNegativo)

// if(numbers.some(number => number < 0)) {
//     console.log('Número negativo encontrado')
// } else {
//     console.log('Número negativo não encontrado')
// }

// const multiploDe3 = numbers.find(number => number % 5 === 0 && number !== 0);
// console.log(multiploDe3)

// const imparNumber = numbers.find(number => number % 2 !== 0);
// console.log(imparNumber)

const pares = numbers.every(number => number % 2 === 0)
console.log(pares);

const positivos = numbers.every( number => number > 0)
console.log(positivos);

if(numbers.every(number => number > 0)) {
    console.log('Todos os números são positivos')
} else {
    let nega = numbers.filter(number => number <= 0)
    console.log(`Estes números ${nega} são negativos ou nulos`)

}

const nomes = ['Ana', 'Caio', 'João', 'Edu']
const todosComA = nomes.every(nome => nome.includes("a"));

console.log(todosComA);
