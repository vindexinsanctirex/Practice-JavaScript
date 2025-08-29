// function exibirMensagem () {
//     console.log("Bem vindo ao JavaScript!")
// }

// exibirMensagem();

// function saudacao(nome) {
//     console.log(`Bem-vindo, ${nome}`)
// }

// saudacao("Caio");

// function somar(num1, num2) {
//     console.log("O Valor Primeiro: " + num1);
//     console.log("O Valor Segundo: " + num2);
//     console.log(`O Valor Total: ${num1 + num2}`);
// }

// somar(7,2);

// function areaCircle(pi, ratio) { // pi = 3.14 ou pi = Math.PI para já deixar o pi atribuído
//     console.log(pi * ratio * ratio);
// }

// areaCircle(3.14, 7)

// function calculo(nmb1, nmb2, sinal) {
//     let resultado;
//     if (sinal === "-"){
//         resultado = nmb1 - nmb2;
//         console.log(`O resultado de ${nmb1} - ${nmb2} é ${resultado}`)}
//     else if (sinal === "+"){
//         resultado = nmb1 + nmb2;
//         console.log(`O resultado de ${nmb1} + ${nmb2} é ${resultado}`)}
//     else if (sinal === "*"){
//         resultado = nmb1 * nmb2;
//         console.log(`O resultado de ${nmb1} * ${nmb2} é ${resultado}`)}
//     else if (sinal === "/"){
//         resultado = nmb1 / nmb2;
//         console.log(`O resultado de ${nmb1} / ${nmb2} é ${resultado.toFixed(2)}`)}
//         else {
//             console.log("Sinal inexistente!")
//         }
//     console.log(`O resultado de ${nmb1} ${sinal} ${nmb2} = ${resultado}`)
// }

// calculo(4,3,"*");

// function multiplicar(...numeros) {
//     let mult = 1;
//     for(let numero of numeros) {
//         mult *= numero
//     }
//     console.log(mult)
// }

// multiplicar(1,2,3,4,5,6,7,8,9);

// function calcularDesconto(preco, desconto){
//     let decimal = desconto / 100;
//     let total = preco - (preco * decimal);
//     console.log(`O valor original de ${preco} com ${desconto}% de desconto fica por ${total}!`);
// }

// calcularDesconto(3550,17.5);

// function calcularSoma(...numeros) {
//     let sum = 0;
//     for(let numero of numeros) {
//         sum += numero
//     }
//     console.log(sum)
// }

// calcularSoma(1,2,3,4,5,6,7,8,9,10);

// function calculaSoma(a, b){
//     return a + b;
// }

// let resultado = calculaSoma(5, 7);
// console.log(resultado)

// function saudar(nome) {
//     return "Olá, " + nome;
// }

// console.log(saudar("Maria"))
// setTimeout(function(){
//     console.log("Mensagem pós processamento")
//     1000000
// })


// let multiply = function(a,b) {
//     return a * b;
// }

// console.log(multiply(7,4))

// let soma = function(a,b) {
//     return a + b;
// }

// console.log(soma(7,4))

// let subtração = function(a,b) {
//     return a - b;
// }

// console.log(subtração(7,4))

// const number = [ 23, 4523, 2, 12, 1, 27, 82, 9]
// console.log(number.sort())
// console.log(number.sort(function(a,b){return a-b})) // o sort pega dois números da lista, subtrai um pelo outro e o maior vai entrando no sort em si.


// function cumprimento(nome, callback) {
//     console.log("Olá, ", nome);
//     callback(); //função esta que pode ter qualquer nome, callback apenas como padrão
// }

// function despedida(){
//     console.log("Tchau!")
// }

// cumprimento("Paul", despedida)


// function processarArray(array, callback){
//     let novoArray = []
//     for (let elemento of array) {
//         novoArray.push(callback(elemento))
//     }
//     return novoArray;
// }

// function dobrar(elemento){
//     return elemento*2;
// }

// function raiz(elemento){
//     return Math.sqrt(elemento)
// }

// let processo = processarArray([2,3,12,23,32,43,52,63,72,83,92], raiz)
// let dobrado = processarArray([2,3,12,23,32,43,52,63,72,83,92], dobrar)
// console.log(processo);
// console.log(dobrado);

// arroy function é isso: () => {}

// const somar = (a,b) => a + b;
// console.log(somar(43,956))

const filtrarPares = (int) => {if (int %2 === 0) {console.log("é par")} else {console.log("é impar")}}

filtrarPares(7)