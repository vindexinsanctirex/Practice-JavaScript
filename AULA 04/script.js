//variáveis simples * pode ser var ou let

// var inteiro = 5;
// let decimal = 5.0;
// var string = "5";
// let condicional = true;
// var nulo = null;
// let indefinido // sem valor atribuido

// let frutas = ['Uva', 'Pêra', 'Maçã', 'Abacaxi'] // lista de js
// let pessoa = [
//     {'nome': 'Caio', 'idade': 37}
// ]

// let dados = ['Uva', 23, 54.7, true, null, ["BMW",2,3]]

// let tamanho = dados.length

// document.writeln('Tamanho do array: ', tamanho)
// document.writeln('<br>')
// document.writeln('Fruta preferida: ', frutas[2])
// document.writeln('<br>')
// document.writeln('Carro dentro do array: ', dados[5][0])
// document.writeln('<br>')

// let cores = ['Vermelho', 'Verde', 'Azul', 'Amarelo']

// console.log(cores[2])

// let números = [1, 2, 3, 4, 5, 6]
// let dobro = []

// for (let num of números){
//     if (num % 2 == 0) {
//         dobro.push(num * 2)
//     }
// }

// console.log(dobro)

// const países = ['Brazil', 'Chile', 'México', 'Bolívia']
// console.log(países.shift())
// console.log(países)

// console.log(países.unshift('Argentina', 'Canadá'))

// const frutas = ['Maçã', 'Banana', 'Laranja']

// frutas.splice(1, 0, "Morango", 'Uva');
// console.log(frutas)

// let numeros = [1, 2, 3, 4, 5];
// for (let numero of numeros) {
// console.log(numero * 2);
// }

// let frutas = ['Maçã', 'Banana', 'Laranja', 'Morango', 'Uva', 'Jambo', 'Jamelão', 'Cajá', 'Jáca']
// let frutasNativas = frutas.slice(5,)
// let frutasConhecidas = frutas.slice(0,5)

// console.log(frutasConhecidas)
// console.log(frutasNativas)

// let animaisNativos = ['Guará', 'Harpia', 'Capivara']

// console.log(frutasNativas.concat(animaisNativos))

// let style = frutas.join(' & ')

// console.log(style)

// let nativasFrutas = frutasNativas.reverse()

// console.log(nativasFrutas)

// let alunos = ['Caio', 'Arthur', 'Filipe', 'Mariana', 'Guilherme', "Altair"]

// console.log(alunos.includes('Maria'))

// let verduras = ['Cenoura', 'Tomate', 'Cebola', 'Salsa']
// let pedido;

// while (true) {
//     pedido = prompt("Qual verdura desejas adiconar ao estoque?")
//     if (verduras.includes(pedido)) {
//     alert("Verdura já presente no estoque!")
//     }
//     else {
//         verduras.push(pedido)
//     alert("Verdura adicionada!")
//     break
//     }

// }

// console.log(verduras)

// const strings = ['Avião', 'Japão', 'Arpão', 'Mão', 'Portão', 'Visão']
// console.log(strings.sort())

// const numbers = [1, 56, 63, 34, 4, 5, 7, 9]
// console.log(numbers.sort((a,b) => a - b))

// for (let str = 0; str < strings.length; str ++) {
//     console.log(strings[str])
// }

// for (let str of strings) {  //se colocar in ao invés de of, será mostrado os índices ao invés dos valores
//     console.log(str)
// }

// let animais = ['Cahorro', 'Gato', 'Papagaio']

// animais.push('Tartaruga')
// animais.splice(0, 1, 'Coelho')
// animais.splice(1, 1, 'Hamster')
// console.log(animais.length)
// console.log(animais[0])
// console.log(animais)

// let cores = ['Vermelho', 'Verde', 'Azul']
// cores.push('Amarelo', 'Roxo')
// cores.splice(1, 1, 'Laranja', 'Marrom')
// let novasCores = cores.splice(1, 4)
// console.log(cores.join(', '))
// cores.reverse()
// console.log(cores.concat(novasCores))