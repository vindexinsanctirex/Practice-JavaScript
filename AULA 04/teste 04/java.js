// Lista de compras
let lista = [];

// Menu principal
while (true) {
  let opcao = prompt(`
    LISTA DE COMPRAS
    ----------------
    1. Adicionar item
    2. Remover item
    3. Ver lista
    4. Sair
    
    Itens na lista: ${lista.length}
    Escolha uma opção:
  `);

  // Adicionar item
  if (opcao === '1') {
    let item = prompt("Digite o item para adicionar:");
    if (item) {
      lista.push(item);
      alert(`"${item}" foi adicionado!`);
    }
  }
  // Remover item
  else if (opcao === '2') {
    if (lista.length === 0) {
      alert("A lista está vazia!");
      continue;
    }
    
    let listaTexto = "Itens na lista:\n";
    for (let i = 0; i < lista.length; i++) {
      listaTexto += `${i}: ${lista[i]}\n`;
    }
    
    let indice = prompt(`${listaTexto}\nDigite o número do item para remover:`);
    indice = Number(indice);
    
    if (indice >= 0 && indice < lista.length) {
      let removido = lista.splice(indice, 1);
      alert(`"${removido}" foi removido!`);
    } else {
      alert("Número inválido!");
    }
  }
  // Ver lista
  else if (opcao === '3') {
    if (lista.length === 0) {
      alert("A lista está vazia!");
      continue;
    }
    
    let listaTexto = "SUA LISTA DE COMPRAS:\n";
    for (let i = 0; i < lista.length; i++) {
      listaTexto += `• ${lista[i]}\n`;
    }
    alert(listaTexto);
  }
  // Sair
  else if (opcao === '4') {
    alert("Até mais!");
    break;
  }
  // Opção inválida
  else {
    alert("Opção inválida! Digite 1, 2, 3 ou 4.");
  }
}