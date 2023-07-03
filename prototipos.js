


Array.prototype.mayoresQueTres = function(){
    var arregloModificado = []

    for(var i = 0; i < this.length; i++){
        if(this[i] > 3){
            arregloModificado.push(false);
        }else{
            arregloModificado.push(this[i]);
        }
    }
    return arregloModificado;
}


var arreglo = [1,2,3,4,5]
var nuevoArreglo = arreglo.mayoresQueTres();
// console.log(nuevoArreglo)

class LatinoAmerica{
    constructor(){
        this.paises = []
    }
}

LatinoAmerica.prototype.AgregarPaises = function(pais){
    this.paises.push(pais);
}

var continente = new LatinoAmerica()
continente.AgregarPaises("Mexico")
continente.AgregarPaises("Argentina")
console.log(continente.paises)