const paragrafos = document.getElementsByTagName('p');

for (let para of paragrafos){
    console.log(para.textContent);
}
console.log(paragrafos);

for (let i = 0; i < paragrafos.length; i++) {
    paragrafos[i].textContent = paragrafos[i].textContent.replace(/bla/g, 'blu');
}

for (let para2 of paragrafos){
    console.log(para2.textContent);
}
console.log(paragrafos);

let box = document.querySelectorAll(".box");
for(let bx of box){
    bx.style.background = "green";
    bx.style.color = "yellow";
}

