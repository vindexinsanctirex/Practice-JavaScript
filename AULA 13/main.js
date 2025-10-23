// function dividir(a, b) {
//     if (b === 0) {
//         throw new Error('Divisão por zero não é permitida de maneira alguma.');
//     }
//     return a / b;
// }

// function executarDivisao(a, b) {
//     try {
//         const resultado = dividir(a, b);
//         console.log(`${a} / ${b} = ${resultado}`);
//     } catch (erro) {
//         console.error('Erro: Não insista em dividir por zero!');
//     } finally {
//         console.log('Operação concluída.\n');
//     }
// }


// // Demonstração com dois casos: divisão válida e divisão por zero
// console.log('Nenhum argumento fornecido. Executando demonstração:');
// executarDivisao(10, 2); // resultado válido
// executarDivisao(5, 0);  // demonstra tratamento de divisão por zero


// function validarDados(nome, idade) {
//     try {
//         if (nome.length < 3) {
//             throw new Error('Nome deve ter pelo menos 3 caracteres.');
//         }
//         if (idade < 18) {
//             throw new Error('Idade deve ser 18 anos ou mais.');
//         }
//         console.log(`Dados válidos: Nome - ${nome}, Idade - ${idade}`);
//     } catch (erro) {
//         console.error(`Erro de validação: ${erro.message}`);
//     } finally {
//         console.log('Validação de dados concluída.\n');
//     }
// }

// // Demonstração com dois casos: dados válidos e inválidos
// console.log('Nenhum argumento fornecido. Executando demonstração:');
// validarDados('Ana', 18); // dados válidos
// validarDados('Jo', 20);  // demonstra tratamento de dados inválidos
// validarDados('John', 17);  // demonstra tratamento de dados inválidos

// function validarIdade(idade) {
//     try {
//         if (idade < 0) {
//             throw new Error('Idade não pode ser negativa.');
//         }
//         if (typeof idade === 'string') {
//             throw new Error('Idade deve ser um número, não uma string.');
//         }
//         if (idade !== Math.floor(idade)) {
//             throw new Error('Idade deve ser um número inteiro.');
//         }
//         console.log(`Idade válida: ${idade} anos.`);
//     } catch (erro) {
//         console.error(`Erro de validação: ${erro.message}`);
//     } finally {
//         console.log('Validação de idade concluída.\n');
//     }
// }

// // Demonstração com dois casos: idade válida e inválida
// console.log('Nenhum argumento fornecido. Executando demonstração:');
// validarIdade(25); // idade válida
// validarIdade(-5);  // demonstra tratamento de idade negativa
// validarIdade(30.5);  // demonstra tratamento de idade não inteira
// validarIdade("vinicius");  // demonstra tratamento de idade como string

// import { buscarDados, PI } from './API/api.js';

// console.log(`Valor de PI: ${PI}`);
// buscarDados();

import * as API from './API/api.js';

console.log(`Valor de PI: ${API.PI}`);
API.buscarDados();