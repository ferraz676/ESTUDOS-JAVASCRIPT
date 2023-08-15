import prompt from 'prompt-sync';
let ler = prompt();

console.log("Informe a quantidade de números desejada: ");

let qtd = Number(ler());

let numeros = [];

for(let cont = 0; cont < qtd; cont++){
    numeros[cont] = Number(ler());
}

console.log("Você digitou os números: ");

for(let item of numeros){
    console.log(item);
}

console.log("Os números pares são: ")

for(let cont = 0; cont < qtd; cont++){
    if(numeros[cont] % 2 == 0){
        console.log(numeros[cont]);
    }
}