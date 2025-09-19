// verificando ímpar ou par

const isEven = (num) => num % 2 === 0;

// criando um array com números
const numbers = [1, 2, 3, 4, 5, 6];

// usando map para aplicar a função isEven em cada número do array
const evenNumbers = numbers.map(isEven);

console.log(evenNumbers);

let teste = evenNumbers.every(isEven);

console.log(teste);

function verificando(numero) {
    if(isNaN(numero))
        return 'Não é um número';
    else if (!Number.isInteger(numero))
        return 'Não é um número inteiro';
    else
        return 'É um número inteiro e'+ (isEven(numero)? ' é par' : ' é ímpar') + '!';
}

console.log(verificando(10));

// funções anonimas

const calcular = (a, b) => a + b;

console.log(calcular(2, 3));

let mensagem = function() {
    console.log('Olá!');
}

mensagem();

// callback function

const callback = (callbackFunc, a, b) => {
    console.log(callbackFunc(a, b));
}

callback(calcular, 5, 7);

// arrow function

const somar = (a, b) => a + b;

console.log(somar(3, 4));

let informe = () => console.log('Olá!');

informe();


function exibirBoasVindas() {
    console.log('Bem-vindo ao curso de JavaScript!');
}

// desestruturação de objetos

const person = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York'
    }
}

const { name, age } = person;

// usando template literals

const nome = 'John';
const idade = 30;

console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);

function saudar(nome) {
    console.log(`Olá, ${nome}!`);
}

saudar("João");
saudar("Maria");
saudar("Pedro");

// spread operator

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const numbers3 = [...numbers1,...numbers2];

console.log(numbers3);

// mais callbacks

function calculado(a, b, callback) {
    console.log(`A soma de ${a} e ${b} é ${a + b}`);
    return callback(a, b);
}

function potencializar(base, expoente) {
    return base ** expoente;
}

const produto = (a, b) => a * b;

let resultado = calculado(5, 3, potencializar);
let result = calculado(5, 3, produto);

console.log(resultado);
console.log(result);