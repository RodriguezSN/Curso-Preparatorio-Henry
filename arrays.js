// var listaDeCompras = [];
// listaDeCompras[3] = "tomate";
// listaDeCompras[1] = "lechuga;";

// console.log(listaDeCompras);


// var elementoDelArrays = listaDeCompras[3];
// console.log(elementoDelArrays)
// console.log(elementoDelArrays.length)

// var partesDelAuto = []
// partesDelAuto [1]= "volante";
// partesDelAuto [3]= "rueda";


// console.log(partesDelAuto)

// var sumaTres =  (x) => {
//     return x + 3
// }

// var nombres = ['Matias ', 'Maria ', 'Diego ', 'Rosa '];
// nombres.push("lucas ") //lo agrega al final
// nombres.unshift("mateo ") //lo agrega al comienzo
// nombres.push ("cande") 
// nombres.unshift("agus")
// nombres.shift("") //elimina el primero 
// nombres.pop("") //elimina el ultimo
// nombres.push ("sebastian ")      
// nombres.push ("dario");
// nombres.push ("gabi");
// nombres.push ("benja");
// nombres.push("zoe")
// nombres.push("federico")
// console.log("El metodo length muestra la cantidad de datos ingresados " + nombres.length);
// console.log("El orden de los datos son: " + nombres)
// var nombresIncluidos = nombres.includes("Rosa ");
// console.log("El nombre solicitado es "  + nombresIncluidos)



var numeros = [9,8,6,7];
var cumpleCondicionDeNumeros = numeros.every((num) => {return num > 5});
console.log(cumpleCondicionDeNumeros);
var mapNumeros = numeros.map((num) => {return num + 2});
console.log(mapNumeros);
var forEachNumeros = numeros.forEach((num)=>{console.log(num)})
var num=[1,2,3,4,5]
for (var i=0;i<num.length;i++){
    console.log(num[i])
}

