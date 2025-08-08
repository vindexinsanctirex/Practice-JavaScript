
const nomes = [];


while (true) {
    const entrada = prompt("Digite um nome (ou 'sair' para encerrar):");
    

    if (entrada.toLowerCase() === 'sair') {
        break;
    }
    

    if (entrada.trim() !== '') {
        nomes.push(entrada);
    } else {
        alert("Por favor, digite um nome válido ou 'sair' para encerrar.");
    }
}


if (nomes.length === 0) {
    console.log("Nenhum nome foi inserido.");
} else {

    console.log("\nLista de nomes com índices:");
    for (let i = 0; i < nomes.length; i++) {
        console.log(`${i + 1}: ${nomes[i]}`);
    }
    

    console.log("\nMensagens de boas-vindas:");
    for (const nome of nomes) {
        console.log(`Bem-vindo(a), ${nome}!`);
    }
}


console.log("\nPrograma encerrado. Obrigado por participar!");