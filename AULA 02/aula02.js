// // // // // let nmbr1 = parseInt(prompt('digite um número'))
// // // // // let nmbr2 = (prompt('digite um número'))


// // // // // let resultado = nmbr1 > 0 && nmbr2 > 0;
// // // // // console.log(resultado);

// // // // // let result = nmbr1 > 0 || nmbr2 > 0;
// // // // // console.log(result);

// // // // // let compare = nmbr1 == nmbr2;
// // // // // console.log(compare);

// // // // // let comp = nmbr1 === nmbr2;
// // // // // console.log(comp);

// // // // // let compare2 = nmbr1 != nmbr2;
// // // // // console.log(compare2);

// // // // // let comp2 = nmbr1 !== nmbr2;
// // // // // console.log(comp2);

// // // // let numero = parseInt(prompt('digite um número'));

// // // // if (numero > 0){
// // // //     console.log('É positivo')
// // // // } else if (numero < 0){
// // // //     console.log('É negativo')
// // // // } else if(numero == 0){
// // // //     console.log('É zero')
// // // // } else {
// // // //     console.log('Sem número')
// // // // }

// // // let numero = 5;

// // // if (numero % 2 == 0) {
// // //     console.log('Par')
// // // } else {
// // //     console.log('Ímpar')
// // // }

// // // // ou

// // // let resultado = (numero % 2 === 0) ? 'Par' : 'Ímpar';
// // // console.log(resultado)

// // let diaDaSemana = 7;
// // let nomeDoDia;

// // switch(diaDaSemana){
// //     case 1:
// //         nomeDoDia = 'Domingo';
// //         break;
// //     case 2:
// //         nomeDoDia = 'Segunda';
// //         break;
// //     case 3:
// //         nomeDoDia = 'Terça';
// //         break;
// //     case 4:
// //         nomeDoDia = 'Quarta';
// //         break;
// //     case 5:
// //         nomeDoDia = 'Quinta';
// //         break;
// //     case 6:
// //         nomeDoDia = 'Sexta';
// //         break;
// //     case 7:
// //         nomeDoDia = 'Sábado';
// //         break;
// //     default:
// //         nomeDoDia = 'Valor Inválido';
// // }

// // console.log(nomeDoDia)

// let numero1 = parseFloat(prompt('digite um número'))
// let numero2 = parseFloat(prompt('digite outro número'))
// let operacao = prompt('escolha +, -, / ou *')
// let resultado;

// switch(operacao){
//     case '+':
//         resultado = numero1 + numero2;
//         break;
//      case '-':
//         resultado = numero1 - numero2;
//         break;
//      case '/':
//         resultado = numero1 / numero2;
//         break;
//      case '*':
//         resultado = numero1 * numero2;
//         break;
//     default:
//         resultado = 'Inválido';

// }

// console.log(resultado)

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
        event.preventDefault();

    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);

    let media = (nota1 + nota2) / 2
    let divMedia = document.getElementById('media');
    let paragrafo = document.getElementById('conteudo');
    
    if (media >= 7){
        divMedia.style.backgroundColor = 'green';
        paragrafo.textContent = `Aprovado ${media.toFixed(2)}`
    } else if (media < 7 && media > 3){
        divMedia.style.backgroundColor = 'yellow';
        paragrafo.textContent = `Recuperação ${media.toFixed(2)}`
    } else if (media < 3){
        divMedia.style.backgroundColor = 'red';
        paragrafo.textContent = `Reprovado ${media.toFixed(2)}`
    } else {
        divMedia.style.backgroundColor = 'gray';
        paragrafo.textContent = 'Inválido';
    }
})
