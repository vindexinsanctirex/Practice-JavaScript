// // criar um objeto que tenha nome, idade, cidade.
// const pessoa = {
//     nome: "Caio",
//     idade: 37,
//     cidade: "Recife"
// };

// console.log(typeof(pessoa.nome)); // deve exibir "object"
// console.log(typeof(pessoa.idade)); // deve exibir "number"
// console.log(typeof(pessoa.cidade)); // deve exibir "string"
// // converter o objeto em uma string JSON
// const pessoaJSON = JSON.stringify(pessoa);
// console.log("Objeto convertido para JSON:", pessoaJSON);

// console.log(typeof(pessoaJSON)); // deve exibir "string"
// console.log(typeof(pessoaJSON.nome)); // deve exibir "undefined"

// // converter a string JSON de volta para um objeto
// const pessoaObjeto = JSON.parse(pessoaJSON);
// console.log("JSON convertido de volta para objeto:", pessoaObjeto);

// // acessar as propriedades do objeto convertido
// console.log("Nome:", pessoaObjeto.nome);
// console.log("Idade:", pessoaObjeto.idade);
// console.log("Cidade:", pessoaObjeto.cidade);

// // criar array chamado produtos com nome e preço, 5 tipos de produtos
// const produtos = [
//     { nome: "Arroz", preco: 5.99 },
//     { nome: "Feijão", preco: 7.49 },
//     { nome: "Macarrão", preco: 3.89 },
//     { nome: "Óleo de cozinha", preco: 6.29 },
//     { nome: "Açúcar", preco: 4.59 }
// ];

// console.log("Array de produtos:", produtos);

// // converter o array em uma string JSON
// const produtosJSON = JSON.stringify(produtos);
// console.log("Array convertido para JSON:", produtosJSON);

// console.log(typeof(produtosJSON)); // deve exibir "string"

// // converter a string JSON de volta para um array
// const produtosArray = JSON.parse(produtosJSON);
// console.log("JSON convertido de volta para array:", produtosArray);

// // acessar os produtos no array convertido
// produtosArray.forEach((produto, index) => {
//     console.log(`Produto ${index + 1}: Nome - ${produto.nome}, Preço - R$${produto.preco}`);
// });

// fetch("https://viacep.com.br/ws/52061470/json/")
//     .then(response => response.json())
//     .then(data => {
//         renderHtml(data);
//     })
//     .catch(error => {
//         console.error('Erro ao buscar os dados:', error);
//     });

// function renderHtml(data) {
//     const body = document.body;
//     body.innerHTML = JSON.stringify(data);
// }

// criar input pra o usuário digitar o CEP
// criar botão para buscar o CEP
// ao clicar no botão, buscar o CEP digitado pelo usuário
// exibir os dados do CEP na tela

// const inputCep = document.createElement("input");
// inputCep.type = "text";
// inputCep.id = "cepInput";
// inputCep.placeholder = "Digite o CEP";

// const buttonBuscar = document.createElement("button");
// buttonBuscar.innerText = "Buscar CEP";

// document.body.appendChild(inputCep);
// document.body.appendChild(buttonBuscar);

// buttonBuscar.addEventListener("click", () => {
//     const cep = inputCep.value;
//     fetch(`https://viacep.com.br/ws/${cep}/json/`)
//         .then(response => response.json())
//         .then(data => {
//             renderHtml(data);
//         })
//         .catch(error => {
//             console.error('Erro ao buscar os dados:', error);
//         });
// });

// const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "ISILDUR",
//     body: "CAST THE RING INO THE FIRE",
//     userId: 1,
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Resposta da API:", data);
//   })
//   .catch((error) => {
//     console.error("Erro ao fazer a requisição:", error);
//   });

// async function enviarDados() {

//     try {
//     const response = await fetch(URL, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             title: "ISILDUR",
//             body: "CAST THE RING INO THE FIRE",
//             userId: 1,
//         }),
//     });

//     const data = await response.json();
//     console.log("Resposta da API (async/await):", data);
//     } catch (error) {
//     console.error("Erro ao fazer a requisição (async/await):", error);
//     }
// }

// enviarDados();

const URL = "https://jsonplaceholder.typicode.com/users";

// async function buscarUsuarios() {
//     try {
//         const response = await fetch(URL);
//         const data = await response.json();
//         console.log("Usuários buscados (async/await):", data);
//     } catch (error) {
//         console.error("Erro ao buscar os usuários (async/await):", error);
//     }
// }

// buscarUsuarios();

// buscar apenas os nomes dos usuários e exibir na tela
async function buscarNomesUsuarios() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        const nomes = data.map(user => user.name);
        console.log("Nomes dos usuários:", nomes);
    } catch (error) {
        console.error("Erro ao buscar os nomes dos usuários:", error);
    }
}

buscarNomesUsuarios();

// buscar apenas os nomes dos usuários e exibir na tela em uma lista usando apenas for each, sem map
async function buscarNomesUsuariosLista() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        const nomes = [];
        data.forEach(user => {
            nomes.push(user.name);
        });
        console.log("Nomes dos usuários (forEach):", nomes);
    } catch (error) {
        console.error("Erro ao buscar os nomes dos usuários (forEach):", error);
    }
}

buscarNomesUsuariosLista();
