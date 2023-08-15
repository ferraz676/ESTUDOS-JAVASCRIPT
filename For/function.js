export function fibonacci(pos){
    let soma = 0;
    let anterior = 0;
    let proximo = 1;

    for(let cont = 0; cont < pos; cont++){
        soma = anterior + proximo;
        anterior = proximo;
        proximo = soma;
    }
    return (`O valor na posicão ${pos} da sequência de Fibonacci é ${anterior}.`);
}