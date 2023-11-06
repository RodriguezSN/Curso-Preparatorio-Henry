var devuelvoUsuario = function () {
	return "Camilo";
};

var devuelvoSaludo = function () {
	return "Hola";
};

var saludar = function (cb1, cb2) {
	return cb1() + " " + cb2();
};

var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
// console.log(resultado)

// **********************************************************************
var devuelvoFrase = function (comida) {
	return "Hoy quiero comer: " + comida;
};

var hablar = function (comida, cb) {
	return cb(comida);
};

let perro = "labrador";

var fraseFinal = hablar("Pizza", devuelvoFrase);
// console.log(fraseFinal)

var nombre = function () {
	return "Sebastian";
};

var nuevoSaludo = saludar(devuelvoSaludo, nombre);
// console.log(nuevoSaludo)
// *******************************************************************************
var suma1 = function (x) {
	return x + 3;
};

function suma2(x) {
	return x + 2;
}

var sumaTre = function (sm1, sm2) {
	return sm1 + sm2;
};

var resul = sumaTre(suma1(2), suma2(3));
var re = sumaTre(suma1(1), suma2(1));
// console.log(re)
// console.log(resul)

// **********************************************************************************

var persona = ["Sebastian", "aodriguez"];
for (let i = 0; i < persona.length; i++) {
	if (persona[i][0] === "a") {
		console.log(true);
	} else {
		console.log(false);
	}
}
console.log(persona.length);
// var letraMayu = apellido[0].toUpperCase() + apellido.substring(1)

// console.log(letraMayu)
