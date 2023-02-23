3 + 5; 
// se necesita agregar el comando console.log ()

//suma
console.log(3 + 5);

//resta
console.log(14 - 7);

//multiplicacion
console.log(4 * 6);

//division
console.log(30 / 9);

//resto
console.log(95 % 4);

//orden de precedencia, importancia al calcular 

console.log(3 + 5 * 2 - 8);  //primero se resuelve la * por el simple echo que su precedencia es mayor a la suma o resta

console.log((3 + 5) * 2 - 8); //primero se resuelve los parentecis por el simple echo que su precedencia es mayor a la multiplicacion
//la precedencia de operadores determina el orden en el cual los operadores son evaluados uno respecto del otro. los peradores con mayor precedencia se convierten en los operandos de los operadores con menor precedencia.

//mas ejemplos de precedencias
console.log(3 + 4 * 5); // 3 + 20
//expected output: 23
console.log(4 * 3 ** 2); //4 * 9 al tener doble ** es 3 por 3
//expected output 36
console.log(4 * (3 * 2));//4 * 6 al tener * es 3 por dos
//expected output 24


//adicion y strings
//los operadores no solo van a aplicarse a numeros. ej el operador de adicion nos va a permitir concatenar(unir) strings

console.log("hola " + "camilo"); //para dejar espacio entre palabras, dejar espacio al final de la palabra y la comilla
var nombre = "candela ";
var saludo = "Hola " + nombre;
console.log(saludo);

var despedida = "chau ";

var apellido = "Martinez "

console.log(despedida + nombre + apellido);

var modeloDeAuto1 = "corsa ";
var modeloDeAuto2 = "renault ";
var color1 = "rojo ";
var color2 = "verde ";
console.log("el auto " + modeloDeAuto2 + "es de color " + color1);