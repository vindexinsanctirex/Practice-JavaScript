const readline = require('readline');

class GerenciadorNomes {
    constructor() {
        this.nomes = [];
    }

    // Adicionar nome usando push()
    adicionarNome(nome) {
        this.nomes.push(nome);
        console.log(`✅ Nome "${nome}" adicionado com sucesso!`);
        this.exibirLista();
    }

    // Filtrar nomes usando filter()
    filtrarNomes(letra) {
        const nomesFiltrados = this.nomes.filter(nome => 
            nome.charAt(0).toLowerCase() === letra.toLowerCase()
        );
        
        if (nomesFiltrados.length > 0) {
            console.log(`🔍 Nomes que começam com "${letra}":`, nomesFiltrados);
        } else {
            console.log(`❌ Nenhum nome encontrado começando com "${letra}"`);
        }
    }

    // Buscar nome usando find()
    buscarNomeEspecifico(nomeBuscado) {
        const nomeEncontrado = this.nomes.find(nome => 
            nome.toLowerCase() === nomeBuscado.toLowerCase()
        );
        
        if (nomeEncontrado) {
            console.log(`🎯 Nome encontrado: "${nomeEncontrado}"`);
        } else {
            console.log(`❌ Nome "${nomeBuscado}" não encontrado na lista`);
        }
    }

    // Transformar nomes usando map()
    transformarNomesMaiusculas() {
        const nomesMaiusculas = this.nomes.map(nome => nome.toUpperCase());
        console.log("🔠 Nomes em maiúsculas:", nomesMaiusculas);
    }

    // Verificar condição usando every()
    verificarNomesLongos() {
        const todosLongos = this.nomes.every(nome => nome.length > 3);
        console.log(`📏 Todos os nomes têm mais de 3 caracteres? ${todosLongos}`);
    }

    exibirLista() {
        console.log("📋 Lista atual:", this.nomes.length > 0 ? this.nomes : "Lista vazia");
    }

    exibirMenu() {
        console.log("\n" + "=".repeat(40));
        console.log("📝 GERENCIADOR DE NOMES");
        console.log("=".repeat(40));
        console.log("1 - Adicionar nome");
        console.log("2 - Filtrar nomes por letra inicial");
        console.log("3 - Buscar nome específico");
        console.log("4 - Transformar nomes em maiúsculas");
        console.log("5 - Verificar nomes longos");
        console.log("6 - Exibir lista atual");
        console.log("0 - Sair");
        console.log("=".repeat(40));
    }
}

// Função principal
function main() {
    const gerenciador = new GerenciadorNomes();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function mostrarMenu() {
        gerenciador.exibirMenu();
        rl.question("Escolha uma opção (0-6): ", processarOpcao);
    }

    function processarOpcao(opcao) {
        switch (opcao) {
            case "1":
                rl.question("Digite o nome para adicionar: ", (nome) => {
                    if (nome.trim()) {
                        gerenciador.adicionarNome(nome.trim());
                    } else {
                        console.log("❌ Nome não pode estar vazio!");
                    }
                    setTimeout(mostrarMenu, 500);
                });
                break;

            case "2":
                if (gerenciador.nomes.length === 0) {
                    console.log("❌ Lista vazia! Adicione nomes primeiro.");
                    setTimeout(mostrarMenu, 500);
                    break;
                }
                rl.question("Digite a letra inicial: ", (letra) => {
                    if (letra.trim() && letra.trim().length === 1) {
                        gerenciador.filtrarNomes(letra.trim());
                    } else {
                        console.log("❌ Digite apenas uma letra!");
                    }
                    setTimeout(mostrarMenu, 500);
                });
                break;

            case "3":
                if (gerenciador.nomes.length === 0) {
                    console.log("❌ Lista vazia! Adicione nomes primeiro.");
                    setTimeout(mostrarMenu, 500);
                    break;
                }
                rl.question("Digite o nome para buscar: ", (nome) => {
                    if (nome.trim()) {
                        gerenciador.buscarNomeEspecifico(nome.trim());
                    } else {
                        console.log("❌ Nome não pode estar vazio!");
                    }
                    setTimeout(mostrarMenu, 500);
                });
                break;

            case "4":
                if (gerenciador.nomes.length === 0) {
                    console.log("❌ Lista vazia! Adicione nomes primeiro.");
                    setTimeout(mostrarMenu, 500);
                    break;
                }
                gerenciador.transformarNomesMaiusculas();
                setTimeout(mostrarMenu, 500);
                break;

            case "5":
                if (gerenciador.nomes.length === 0) {
                    console.log("❌ Lista vazia! Adicione nomes primeiro.");
                    setTimeout(mostrarMenu, 500);
                    break;
                }
                gerenciador.verificarNomesLongos();
                setTimeout(mostrarMenu, 500);
                break;

            case "6":
                gerenciador.exibirLista();
                setTimeout(mostrarMenu, 500);
                break;

            case "0":
                console.log("👋 Saindo do programa...");
                rl.close();
                break;

            default:
                console.log("❌ Opção inválida! Escolha entre 0 e 6.");
                setTimeout(mostrarMenu, 500);
        }
    }

    console.log("🚀 Bem-vindo ao Gerenciador de Nomes!");
    mostrarMenu();
}

// Executar o programa
main();