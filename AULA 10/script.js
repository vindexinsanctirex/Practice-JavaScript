let indice = document.getElementById("tituloIndice");
console.log(indice);
console.log(typeof(indice));
console.log(indice.textContent);

let lista = document.getElementsByClassName("itensIndice");
console.log(lista);
console.log(typeof(lista));

let paragrafos = document.getElementsByTagName("p");
console.log(paragrafos);
console.log(typeof(paragrafos));

let footer = document.querySelector(".footer");
console.log(footer);
console.log(typeof(footer));

let button = document.querySelector(".button, .button-primary");
console.log(button);
console.log(typeof(button));

let elements = document.querySelectorAll(".itensIndice");
console.log(elements);
console.log(typeof(elements));

const arrayElements = Array.from(elements);
console.log(arrayElements);
const arrayParagrafos = [...paragrafos];
console.log(arrayParagrafos);

let objetivo = document.getElementById('objetivosTitulo').textContent;
console.log(objetivo);

let objetivos = document.getElementById('objetivos').innerHTML = "<strong>Adicionado pelo DOM!</strong>"

let link = document.getElementById('link');
link.setAttribute('target', '_blank');

let novoParagrafo = document.createElement("P");
novoParagrafo.textContent = "Conteúdo adicionado pelo DOM";
document.body.appendChild(novoParagrafo);

let novoExercicio = document.createElement("li");
novoExercicio.textContent = "Conteúdo adicionado pelo DOM";
document.getElementById("numeracao").appendChild(novoExercicio);

let conceitos = document.getElementById('conceitos');
if (conceitos && conceitos.parentNode) {
    conceitos.parentNode.removeChild(conceitos);
}
