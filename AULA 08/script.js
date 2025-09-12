// let pessoa = {
//     nome: 'Caio',
//     idade: 37,
//     altura: 1.78,
//     peso: 75,
//     profissao: 'Desenvolvedor Web'
// }

// let carro = {
//     marca: 'Ford',
//     modelo: 'Mustang',
//     ano: 2021,
//     cor: 'Preto',
//     numeroDePortas: 4,
//     motor: '4.0 Turbo',
//     preco: 50000
// }

// console.log(carro.ano, carro["ano"])

// console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Altura: ${pessoa.altura}m, Peso: ${pessoa.peso}kg, Profissão: ${pessoa.profissao}`)
// console.log(`Marca: ${carro.marca}, Modelo: ${carro.modelo}, Ano: ${carro.ano}, Cor: ${carro.cor}, Número de Portas: ${carro.numeroDePortas}, Motor: ${carro.motor}, Preço: USD$ ${carro.preco}`)

// pessoa.profissao = 'Full Stack Developer';
// pessoa.cidade = 'São Paulo';

// console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Altura: ${pessoa.altura}m, Peso: ${pessoa.peso}kg, Profissão: ${pessoa.profissao}, Cidade: ${pessoa.cidade}`)

// let { nome, idade, profissao } = pessoa;
// console.log(`Nome: ${nome}, Idade: ${idade}, Profissão: ${profissao}`);

// let livro = {
//     titulo: 'O Senhor dos Anéis',
//     autor: 'J.R.R. Tolkien',
//     ano: 1937
// }

// let { titulo, autor, ano } = livro;
// console.log(`Título: ${titulo}, Autor: ${autor}, Ano: ${ano}`);

// let { titulo: novoTitulo, autor: novoAutor, ano: novoAno } = livro;
// console.log(`Novo Título: ${novoTitulo}, Novo Autor: ${novoAutor}, Novo Ano: ${novoAno}`);

// const detalhesFilme = ({título, diretor, ...detalhes}) => {
//     console.log(`Diretor: ${diretor}`);
//     console.log(`Título: ${título}`);
//     console.log(`Outros detalhes: `, detalhes);
// }

// let filme = {
//     título: 'Star Wars: A New Hope',
//     diretor: 'George Lucas',
//     ano: 1977,
//     genero: 'Ficção Científica',
//     personagens: ['Yoda', 'Darth Vader', 'Leia Organa']
// }

// detalhesFilme(filme);

// const notas = [7, 8, 6];

// const novasNotas = [...notas, 9];

// console.log(novasNotas);

// let maquina = {
//     nome: "Impressora",
//     ligado: true,
//     status: function() {
//         if(this.ligado) {
//             console.log(`A ${this.nome} está ligada.`);
//             } else {
//             console.log(`A ${this.nome} está desligada.`);
//         }
//     }
// }

// maquina.status();

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [...array1,...array2, 7];

// console.log(array3);

// const frutas = ['Maçã', 'Banana', 'Laranja'];
// const verduras = ['Uva', 'Manga', 'Melão'];
// const comidas = [...frutas,...verduras, 'Hamburguer'];
// const alimentos = frutas.concat(verduras);

// console.log(comidas);
// console.log(alimentos);

// const obj1 = { nome: 'Caio', idade: 37 };
// const obj2 = {...obj1, profissao: 'Desenvolvedor Web' };

// console.log(obj2);

// const arrayobjetos = [{ nome: 'Caio', idade: 37 }, { nome: 'João', idade: 35 }, { nome: 'Maria', idade: 32 }, { nome: 'Pedro', idade: 30 }];
// for (let obj of arrayobjetos) {
//     console.log(obj.nome);
// }

// const livros = [{livro: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien'}, {livro: 'O auto da compadecida', autor: 'Suassuna'}];

// livros.push({livro: '1984', autor: 'George Orwell'});

// // ou

// const livro = {livro: 'Harry Potter', autor: 'J.K. Rowling'};
// livros.push(livro);

// // ou

// livros[4] = {livro: 'Pride and Prejudice', autor: 'Jane Austen'};

// console.log(livros);

// const cars1 = [{marca: 'Ford', modelo: 'Mustang', ano: 2021}];
// const cars2 = [{marca: 'Chevrolet', modelo: 'Corvette', ano: 2018}];

// const allCars = [...cars1,...cars2, {marca: 'BMW', modelo: 'X5', ano: 2020}];

// console.log(allCars);

// const marcas = { Ford: ['Mustang', 'Focus'], Chevrolet: ['Corvette', 'Camaro'], BMW: ['X5', '3 Series'] };
// const marcas2 = { Toyota: ['Corolla', 'Camry'] };

// const allMarcas = {...marcas,...marcas2};

// console.log(allMarcas);

const aluno = { 
    nome: 'Caio', 
    notas: [7, 8, 6, 9, 4], 
    calcularMedia: function() {
        const soma = this.notas.reduce((total, nota) => total + nota, 0);
        return soma / this.notas.length;
    }, 
    adicionarNota: function(novaNota) {
        this.notas.push(novaNota);
    }
};

console.log(aluno.calcularMedia().toFixed(2));
