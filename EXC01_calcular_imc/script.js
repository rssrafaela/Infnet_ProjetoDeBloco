// IMC = peso / altura² para peso em quilogramas e altura em metros

let peso = 100;
let altura = 1.8;

let imc = peso / (altura * altura);
// let imc = peso / altura ** 2; (outra forma de fazer)


console.log("O seu IMC é de", imc.toFixed(1));
// console.log("O seu IMC é de "+ imc.toFixed(1) + "."); (outra forma de fazer)

// Mostrar se a pessoa está dentro do peso ou não.

if ( imc >= 18.5 && imc <= 25) {
    //Se a condição for verdadeira, isso aqui acontece.
    console.log("Pelo IMC, você está dentro do peso recomendado para sua altura.");
} else {
    //Se a condição for falsa, isso aqui acontece.
    console.log("Pelo IMC, você está fora do peso recomendado para sua altura.");
}