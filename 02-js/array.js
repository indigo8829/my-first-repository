let frutas = ["bananas","platano","naranja","uva"]
let numeros = [1,2,3,4,5]

console.log(frutas[3])

frutas[1] = "melón";

console.log(frutas);

console.log(frutas.length);

frutas.pop();

console.log(frutas);

frutas.push("manzana");
console.log(frutas);

frutas.shift();
console.log(frutas);

let frutas2=["pera","piña","fresa"];
let frutas3=frutas.concat(frutas2);
console.log(frutas3);

let resultado = numeros.find(n => n >2);
console.log (resultado);

let suma = numeros.map(n => n+2)
console.log(suma);






