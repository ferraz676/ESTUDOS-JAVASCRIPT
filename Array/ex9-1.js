import prompt from 'prompt-sync';
let ler = prompt();

console.log("Informe a quantidade de notas: ");

let qtd = ler();

let notas = [];

for(let cont = 0; cont < qtd; cont++){
    notas[cont] = Number(ler());
}

console.log("Notas digitadas: ");

for(let item of notas){
    process.stdout.write(String(item + '-'))
}
console.log("");

let soma = 0;

for(let cont = 0; cont < qtd; cont++){
    soma = soma + notas[cont];
}

let media = soma / qtd;

console.log("A média é " + media);