// // verificando ímpar ou par

// const isEven = (num) => num % 2 === 0;

// // criando um array com números
// const numbers = [1, 2, 3, 4, 5, 6];

// // usando map para aplicar a função isEven em cada número do array
// const evenNumbers = numbers.map(isEven);

// console.log(evenNumbers);

// let teste = evenNumbers.every(isEven);

// console.log(teste);

// function verificando(numero) {
//     if(isNaN(numero))
//         return 'Não é um número';
//     else if (!Number.isInteger(numero))
//         return 'Não é um número inteiro';
//     else
//         return 'É um número inteiro e'+ (isEven(numero)? ' é par' : ' é ímpar') + '!';
// }

// console.log(verificando(10));

// // funções anonimas

// const calcular = (a, b) => a + b;

// console.log(calcular(2, 3));

// let mensagem = function() {
//     console.log('Olá!');
// }

// mensagem();

// // callback function

// const callback = (callbackFunc, a, b) => {
//     console.log(callbackFunc(a, b));
// }

// callback(calcular, 5, 7);

// // arrow function

// const somar = (a, b) => a + b;

// console.log(somar(3, 4));

// let informe = () => console.log('Olá!');

// informe();


// function exibirBoasVindas() {
//     console.log('Bem-vindo ao curso de JavaScript!');
// }

// // desestruturação de objetos

// const person = {
//     name: 'John',
//     age: 30,
//     address: {
//         street: '123 Main St',
//         city: 'New York'
//     }
// }

// const { name, age } = person;

// // usando template literals

// const nome = 'John';
// const idade = 30;

// console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);

// function saudar(nome) {
//     console.log(`Olá, ${nome}!`);
// }

// saudar("João");
// saudar("Maria");
// saudar("Pedro");

// // spread operator

// const numbers1 = [1, 2, 3];
// const numbers2 = [4, 5, 6];

// const numbers3 = [...numbers1,...numbers2];

// console.log(numbers3);

// // mais callbacks

// function calculado(a, b, callback) {
//     console.log(`A soma de ${a} e ${b} é ${a + b}`);
//     return callback(a, b);
// }

// function potencializar(base, expoente) {
//     return base ** expoente;
// }

// const produto = (a, b) => a * b;

// let resultado = calculado(5, 3, potencializar);
// let result = calculado(5, 3, produto);

// console.log(resultado);
// console.log(result);

// // rest operator

// function multiplicar(...nums) {
//     let total = 1;
//     for (let num of nums) {
//         total *= num;
//     }
//     return total;
// }

// console.log(multiplicar(1, 2, 3, 4, 5));


// function somado(a, b) {
//     console.log(a + b);
// }

// function multiplicado(a, b) {
//     console.log(a * b);
// }

// function executarOperação(a, b, operacao) {
//     return operacao(a, b);
// }

// executarOperação(5, 3, somado);
// executarOperação(5, 3, multiplicado);



// function ordenar(arr, key) {
//     return arr.sort((a, b) => a[key] - b[key]);
// }

// const pessoas = [
//     { nome: 'John', idade: 30 },
//     { nome: 'Alice', idade: 25 },
//     { nome: 'Bob', idade: 35 }
// ]

// console.log(ordenar(pessoas, 'idade'));
// //descrescente
// console.log(ordenar(pessoas, 'idade').reverse());

// const somado = (a, b) => console.log(a + b);
// const multiplicado = (a, b) => console.log(a * b);
// const executarOperacao = (a, b, operacao) => operacao(a, b);

// // Executando
// executarOperacao(5, 3, somado);        // 8
// executarOperacao(5, 3, multiplicado);  // 15


// let frutas = ['Maçã', 'Banana', 'Laranja', 'Morango', 'Uva'];

// frutas.forEach(produto => {
//     console.log(produto);
//     document.writeln(`
//         <li>${produto}</li>`)
// })


// map dobrando números


// const numeros = [1, 2, 3, 4, 5];

// const dobroDosNumeros = numeros.map(numero => numero * 2);

// console.log(dobroDosNumeros);

// const somados = numeros.reduce((total, numero) => total + numero, 0);

// console.log(somados);

// const multiplicados = numeros.reduce((total, numero) => total * numero, 1);

// console.log(multiplicados);


// const produtos = [
//     { nome: 'Notebook', preço: 3000},
//     { nome: 'Celular', preço: 2000},
//     { nome: 'TV', preço: 2500}
// ];

// const maiorPreço = produtos.reduce((atual, maior) => atual.preço > maior.preço ? atual : maior, produtos[0]);

// console.log(maiorPreço);

// const menorPreço = produtos.reduce((atual, menor) => atual.preço < menor.preço ? atual : menor, produtos[0]);

// console.log(menorPreço);

// const mediaPrecos = produtos.reduce((total, produto) => total + produto.preço, 0) / produtos.length;

// console.log(mediaPrecos);

// objetos

// const bairro = {
//     nome: 'Bairro Novo',
//     cidade: 'São Paulo',
//     populacao: 200000
// }

// const pessoa = {
//     nome: 'João',
//     idade: 30,
//     endereco: {
//         rua: 'Rua das Babosas',
//         numero: 123,
//         bairro: bairro
//     }
// };

// console.log(pessoa.nome);
// console.log(pessoa.endereco.rua);
// console.log(pessoa.endereco.bairro.nome);

// pessoa.profissao = {
//     nome: 'Desenvolvedor',
//     area: 'Desenvolvimento Web',
//     empresa: {
//         nome: 'Google',
//         cnpj: '1234567890123456'
//     }
// }

// console.log(pessoa);

const maquina = {
    nome: 'Impressora',
    funcionando: true,
    exibirStatus: function() {
        if(this.funcionando) {
            console.log(`A ${this.nome} está ligada.`);
        } else {
            console.log(`A ${this.nome} está desligada.`);
        }
    }
}


maquina.exibirStatus();

const motor = {
    nome: 'Motor',
    ligado: false,
    ligarMotor: function() {
        if(!this.ligado) {
            this.ligado = true;
            console.log(`O ${this.nome} foi ligado.`);
        } else {
            console.log(`O ${this.nome} já está ligado.`);
        }
    }
}

motor.ligarMotor();