// let num1 = 23;
// let num2 = 32;

// const nome = "Caio";
// const cidade = "Recife";

// let soma = num1 + num2;
// let subtração = num2 - num1;
// let multiplicação = num1 * num2;
// let divisão = num2 / num1;

// console.log(nome, cidade, num1, num2, soma, subtração, multiplicação, divisão);

// console.log(`Olá meu nome é ${nome}, moro em ${cidade}, números como ${num1} e ${num2} me interessam, que somados fica ${soma}, subtraídos fica ${subtração},
//     \n multiplcados fica ${multiplicação} e dividos fica ${divisão}.`)

// let idade = 16;
// let horário = 7;
// let filme = "Jurassik Park";
// let horaFilme = 12;

// if (idade < 18 || idade >= 60) {
//     console.log("Você não tem direito à desconto na entrada")
// }

// if (horário < 9) {
//     console.log("A bilheteria ainda está fechada")
// }

// if (filme === "Jurassik Park" && horaFilme !== 12) {
//     console.log("O filme já começou!")
// }

// else if (filme !== "Jurassik Park") {
//     console.log("O Filme não está em cartaz!")
// }

// else {
//     console.log("O filme está prestes a começar!")
// }

// let idade = 27;

// if (idade < 18) {
//     console.log("Você é menor de idade.")
// }

// else if (idade >= 18 && idade < 65) {
//     console.log("Você é um adulto.")
// }

// else {
//     console.log("Você é um idoso.")
// }

// let resultado = (idade < 18) ? console.log("Você é menor de idade") : console.log("você é um adulto"); // operador ternário em apenas uma linha, usado quando existem apenas duas condições (if e else, sem else if) para simplificar a operação.

// let num1 = 25;
// let num2 = 15;

// if (num2 % num1 === 0) {
//     console.log("O número é múltiplo.")
// }

// else {
//     console.log("Não é múltiplo.")
// }

// const adminTrue = "admin";
// let admin = "admin";
// const passwordTrue = "12345";
// let password = "12345";

// let login = (admin === adminTrue) && (passwordTrue === password) ? console.log("Acesso permitido.") : console.log("Acesso Recusado.")

// let number = 7;

// for(let i = 1; i <= 10; i++){
//     console.log(`${number} x ${i} = ${number * i}`)
// }

// // Lista de números para calcular a tabuada
// const numeros = [3, 7, 5];

// // Loop for...of para iterar sobre cada número
// for (const numero of numeros) {
//     console.log(`Tabuada do ${numero}:`);
    
//     // Loop for para calcular e mostrar a tabuada de 1 a 10
//     for (let i = 1; i <= 10; i++) {
//         const resultado = numero * i;
//         console.log(`${numero} x ${i} = ${resultado}`);
//     }
    
//     console.log(''); // Linha em branco entre as tabuadas
// }

// let n = 3;

// for(let i = n; i >= 1; i--) {
//     let linha = "";
//     for(let j = 1; j <= i; j ++) {
//         linha += j;
//     }
//     console.log(linha)
// }

for(i = 1; i <= 10; i++) {
    console.log(i)
}

let number = 0;
while(number <= 20) {
    number++;
    if(number % 2 === 0){
    console.log(number);
    }
}

let soma = 0;

for(let i = 1; i<= 5; i++) {
    soma += i;
    console.log(soma)
}

console.log(soma)

let multi = 1;

for(let i = 1; i<= 5; i++) {
    multi *= i;
    console.log(multi)
}

console.log(multi)

