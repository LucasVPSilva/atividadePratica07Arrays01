// Exercicio 1:

/*
const nomes = ["Lucas", "Bruna", "Sergio", "Neusair"];

for (let i = 0; i < nomes.length; i++) {
    document.write(`${nomes[i]} `);

}

*/

// Exercicio 2:

/*

const numeros = [1, 33, 16, 44, 89]

let soma = 0;

document.write(`Números: `);
for (const numero of numeros) {
    document.write(`${numero} `);
    soma += numero;


}
document.write(`<p>Soma: ${soma}</p> `);

*/

// Exercicio 3:

const frutas = ["laranja", "banana", "maçã"];

console.log(frutas);

frutas.push("uva");

console.log(`Fruta adicionada com push: ${frutas}`);

frutas.pop();

console.log(`Frutas após remoção com pop: ${frutas}`);

frutas.unshift("pêssego");

console.log(`Fruta adicionada com unshift: ${frutas}`);

frutas.shift();

console.log(`Frutas após remoção com shift: ${frutas}`);

document.write(`Frutas: `)
for (const fruta of frutas) {
    document.write(`${fruta} `)
}




