import prompt from 'prompt-sync';
let ler = prompt();

console.log("Indique a quantidade de nomes: ");
let qtd = Number(ler());

let nomes = [];

for(let cont = 0; cont < qtd; cont++){
    nomes[cont] = ler();
}

console.log("Os nomes após o filtro são: ");

for(let cont = 0; cont < qtd; cont++){
    
    if(nomes[cont][0] == "l"){
        console.log(nomes[cont]);
    }
}