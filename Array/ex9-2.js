import prompt from "prompt-sync";
let ler = prompt();

console.log("Digite a quantidade de notas: ");
let qtd = ler();

let notas = [];

for(let cont = 0; cont < qtd; cont++){
    notas[cont] = ler();
}

console.log("Notas digitadas: ");

for(let cont = 0; cont < qtd; cont++){
    process.stdout.write(String(notas[cont] + '-'));
}
console.log("");

let maior = 0;

for(let cont = 0; cont < qtd; cont++){
    maior = Math.max(notas[cont]);
}

console.log("A maior nota é: " + maior);
    