//  var palabra = "henri";
//  var palabraSeparada = palabra.split('');
//  palabraSeparada.pop();
//  palabraSeparada.push ("y");
//  var palabraAreglada = palabraSeparada.join('')
// //  console.log(palabraAreglada);

// var numeros = [2,4,5,3,22,6,12];
// numeros.forEach((num) =>{if (num % 2===0) {console.log(num)} })

var nombres = ["raul ", "atilio "]
nombres.unshift("pablo ");
nombres.shift("");
nombres.push("maria ");
nombres.push("mario");
let pos = 1, numElemento = 2
// let elementosEliminados = nombres.splice(pos, numElemento)
console.log(nombres);


var nom = "felipes"
var nombreSeparados = nom.split('')
nombreSeparados.pop("")
nombreSeparados.push(".")
var unirNombres = nombreSeparados.join('')
// console.log(unirNombres)

nombresEstan = nombres.includes("atilio ");
// console.log(nombresEstan)

var numeros = [2,4,6,22,8]
var sumarUno = numeros.map((num) => {return num + 1});
// console.log("el resultado de sumar uno es " + sumarUno)
var numerosTienePar = numeros.every ((num) => {return num % 2===0});
// console.log("numeros es par? "+numerosTienePar);
// console.log("numeros contiene " + numeros)

var nombrede = "jeremias"
var arreglarnombre = nombrede.split ('')
arreglarnombre.pop("");
var nombreArreglado = arreglarnombre.join('')
// console.log(nombreArreglado);

// numeros.forEach((num) => {console.log(num)})
