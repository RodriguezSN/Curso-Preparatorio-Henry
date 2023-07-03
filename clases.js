function Auto (puertas, marca, color, ruedas, año){
    this.puertas = puertas;
    this.marca = marca;
    this.color = color;
    this.ruedas = ruedas;
    this.año = año;

    this.informacion= function(){
        console.log("Mi auto es un " + this.marca + " de color " + this.color)
    }
}

var miPrimerAuto = new Auto (2, "Renault", "Negro", 4, 2019)
// miPrimerAuto.informacion()

class Moto{
    constructor (puertas, marca, color, ruedas, año){
        this.puertas = puertas;
        this.marca = marca;
        this.color = color;
        this.ruedas = ruedas;
        this.año = año;
    }
    informacion(){
        console.log("Mi moto es una " + this.marca + " de color " + this.color)
    }
}

var MiprimeraMoto = new Moto (0,"Yamaha", "Negra", 2,2021)
var MiSegundaMoto = new Moto (0,"yamaha", "amarilla",2,2023)

// console.log(MiprimeraMoto)
// console.log(MiSegundaMoto)
// MiSegundaMoto.informacion()

function Animales (alas,volador,patas,ojos,color,habitad){
    this.alas = alas
    this.volador = volador
    this.patas = patas 
    this.ojos = ojos
    this.color = color
    this.habitad = habitad
    
}

var gallina = new Animales(true,false,2,2,"Blanca-marron-negra","tierra")
var tiburon = new Animales(false,false, 0,2,"gris","agua")
// console.log(gallina)

class Personas{
    constructor(nombre, sexo, edad, altura, color, cabello, trabaja, estudia ){
        this.nombre = nombre
        this.sexo = sexo
        this.edad = edad
        this.altura = altura
        this.color = color
        this.cabello = cabello
        this.trabaja = trabaja
        this.estudia = estudia
    }
    info(){
        if(this.trabaja === true && this.estudia === true){
            console.log( this.nombre + " Trabaja y Estudia")
        }else if(this.trabaja === true && this.estudia === false){
            console.log(this.nombre + " Trabaja pero no estudia")
        }else if(this.trabaja === false && this.estudia === true){
            console.log(this.nombre + " No trabaja pero si esta estudiando ^-^")
        }
    }
}


Personas.prototype.claseDePersona = function (){
    var Hombres = []
    if(this.sexo === "Masculino"){
        Hombres.push(this.nombre)
    }
    return Hombres
}

var sebastian = new personas("Sebastian", "Masculino", 22, 1.73, "Morocho", "Rulos", true, true)
var Agustina = new personas("Agustina", "Femenino", 21, 1.60, "Blanca", "Rulos", false, true) 
var Ricardo = new personas("Ricador", "Masculino", 52, 1.77, "Semi morocho", "lacio", true, false)
var NewSebastian = sebastian.claseDePersona()
console.log(NewSebastian)




