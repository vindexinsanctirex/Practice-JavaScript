var ocupado = true;
let posição = "terceiro";
const nome = "Caio";

if (posição === "terceiro") {
    console.log(`${nome} está em terceiro lugar!`)
}

if (ocupado) {
    alert(`${nome} está em ocupado!`)
}


var numeral = 432439887;

console.log(String(numeral));

var bool = "true";

console.log(Boolean(bool));

if (Boolean(bool) !== false) {
    alert(`${numeral} não é o sufiente.`)
}


var base = 2;
base += 5;
console.log(base);
base -= 3;
console.log(base);
base *= 3;
console.log(base);
base /= 2;
console.log(base);
base **= 2;
console.log(base);
base %= 2;
console.log(base);