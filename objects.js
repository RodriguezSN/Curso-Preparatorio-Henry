var deportes = { conBalon: ['Football', 'Basketball', 'Rugby'], sinBalon: ['Boxeo', 'Surf', 'Trekking'] };

var persona = {nombre: "Nico", edad: 22, medidad: 22 , estudios: {esProgramador : true}}

// console.log(persona.nombre)
// persona.nombre = "seba"
// console.log(persona.nombre)

var grupoFamiliar = {Familia:{Padre: {Nombre: "pepe", Apellido: "darte", Edad: 51,}, Hijo: {Nombre: "Luis", Apellido: "Miguel", Edad: 22}, Novia: {Nombre: "Lola", Apellido: "Cola", Edad: 21}}}

// console.log(grupoFamiliar.Familia.Novia )
// console.log(grupoFamiliar.Familia.Hijo)

var misFunciones = {saludar: function(){console.log("Hola")}}

// misFunciones.saludar()

var comidas = {};
var diferentesFunciones = function(propUno, propDos){
    comidas[propUno] = ["vegetales", "frutas"]
    comidas[propDos] = ["hamburguesas", "pizza"]
}
diferentesFunciones("comidasSaludables", "comidaChatarra")
console.log(comidas)


var accesorios = {}
var diferentesAccesorios = function(acceUno, acceDos, acceTres){
    accesorios[acceUno] = ["Bide", "Ducha"]
    accesorios[acceDos] = ["Horno", "Heladera"]
    accesorios[acceTres] = ["Cama", "Ropero"]
}
diferentesAccesorios("Baño","Cocina","Cuarto")
accesorios.Libin = ["Sillon", "Tv"]
delete accesorios.Libin
console.log(accesorios)


grupoFamiliar.Familia["madre"] = {Nombre: "Tota", Apellido: "Mendez", edad: 48}  
// console.log(grupoFamiliar.Familia.madre)

var modelosDeAutos = {};
var distintosModelos = function (autoUno, autoDos) {
    modelosDeAutos[autoUno] = ["fiatUno", "corsaDos"]
    modelosDeAutos[autoDos] = ["ferrari", "audi"]
}
distintosModelos("autoLento", "autoRapido")
// console.log(modelosDeAutos)

var mascota = {Nombre:"Rengar", Animal:"Gato", Color:"Naranja y Amarillo", Cariñoso: false, Dueño: "Sebastian", info: function (){ console.log("Mi gato es de color " + this.Color + " Y se llama " + this.Nombre)  } }
// mascota.info()

var mascotaContiene = mascota.hasOwnProperty("Nombre")
// console.log(mascotaContiene)

var todasLasPropiedadesDeMascota = Object.keys(mascota)
// console.log(todasLasPropiedadesDeMascota)
var edades = {padre:52, madre:48, hijoMayor:31, hijoMenor: 22};
// for (var i in edades){
//     console.log("El/La " + i)
//     console.log("tiene " + edades[i])
// }

console.log(21%5)

var objetoHouse = {cocina: ["Horno", "Mesa", "Plato"], baño: ["Ducha", "Bacha", "toalla"], cuarto: ["Cama", "Ropero"] }
console.log(objetoHouse.baño)

