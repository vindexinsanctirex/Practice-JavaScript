const URL = "https://api-produtos-5ywn.onrender.com/produtos";

// // Buscar e aplicar desconto em uma única função
// async function getProdutosComDesconto() {
//     const response = await fetch(URL);
//     const produtos = await response.json();
    
//     return produtos.map(produto => ({
//         ...produto,
//         preco: Number((produto.preco * 0.9).toFixed(2)),
//         precoOriginal: produto.preco
//     }));
// }

// // Uso
// getProdutosComDesconto()
//     .then(produtos => console.log(produtos))
//     .catch(error => console.error(error));

const LIMIT = 5;

let skip = 0;
let produtosAtuais = [];

// Elementos do DOM
const produtosContainer = document.getElementById('produtosContainer');
const btnAnterior = document.getElementById('btnAnterior');
const btnProximo = document.getElementById('btnProximo');
const contador = document.getElementById('contador');
const loading = document.getElementById('loading');
const semProdutos = document.getElementById('semProdutos');

// Event Listeners
btnAnterior.addEventListener('click', carregarPaginaAnterior);
btnProximo.addEventListener('click', carregarProximaPagina);

// Função principal para carregar produtos
async function carregarProdutos() {
    mostrarLoading(true);
    limparErros();

    try {
        const response = await fetch(`${URL}?skip=${skip}&limit=${LIMIT}`);
        
        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status}`);
        }
        
        produtosAtuais = await response.json();
        atualizarDOM();
        
    } catch (error) {
        mostrarErro(`Erro ao carregar produtos: ${error.message}`);
    } finally {
        mostrarLoading(false);
    }
}

// Função para carregar próxima página
function carregarProximaPagina() {
    skip += LIMIT;
    carregarProdutos();
}

// Função para carregar página anterior
function carregarPaginaAnterior() {
    skip = Math.max(0, skip - LIMIT);
    carregarProdutos();
}

// Função para atualizar o DOM com os produtos
function atualizarDOM() {
    produtosContainer.innerHTML = '';
    
    if (produtosAtuais.length === 0) {
        semProdutos.style.display = 'block';
        produtosContainer.style.display = 'none';
    } else {
        semProdutos.style.display = 'none';
        produtosContainer.style.display = 'grid';
        
        produtosAtuais.forEach(produto => {
            const produtoElement = criarElementoProduto(produto);
            produtosContainer.appendChild(produtoElement);
        });
    }
    
    atualizarContador();
    atualizarBotoes();
}

// Função para criar elemento de produto
function criarElementoProduto(produto) {
    const div = document.createElement('div');
    div.className = 'produto-card';
    
    const precoComDesconto = produto.preco * 0.9;
    
    div.innerHTML = `
        <div class="produto-nome">${produto.nome || 'Produto sem nome'}</div>
        ${produto.descricao ? `<div class="produto-descricao">${produto.descricao}</div>` : ''}
        <div class="produto-preco">
            <span style="text-decoration: line-through; color: #999; margin-right: 10px;">
                R$ ${produto.preco?.toFixed(2) || '0.00'}
            </span>
            <span style="color: #28a745;">
                R$ ${precoComDesconto.toFixed(2)}
            </span>
        </div>
        ${produto.categoria ? `<div class="produto-categoria">${produto.categoria}</div>` : ''}
    `;
    
    return div;
}

// Função para atualizar o contador de páginas
function atualizarContador() {
    const pagina = Math.floor(skip / LIMIT) + 1;
    contador.textContent = `Página ${pagina}`;
}

// Função para atualizar estado dos botões
function atualizarBotoes() {
    btnAnterior.disabled = skip === 0;
    
    // Desabilita próximo se veio menos produtos que o limite (última página)
    btnProximo.disabled = produtosAtuais.length < LIMIT;
}

// Função para mostrar/ocultar loading
function mostrarLoading(mostrar) {
    loading.style.display = mostrar ? 'block' : 'none';
    produtosContainer.style.display = mostrar ? 'none' : 'grid';
}

// Função para mostrar erro
function mostrarErro(mensagem) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = mensagem;
    
    produtosContainer.innerHTML = '';
    produtosContainer.appendChild(errorDiv);
}

// Função para limpar erros
function limparErros() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.remove());
}

// Inicializar
document.addEventListener('DOMContentLoaded', carregarProdutos);