import prompt from "prompt-sync";
import { fibonacci } from "./function.js";
let ler = prompt();


console.log("informe a posição desejada: ");
let pos = ler();

let x = fibonacci(pos);
console.log(x);