//  var palabra = "henri";
//  var palabraSeparada = palabra.split('');
//  palabraSeparada.pop();
//  palabraSeparada.push ("y");
//  var palabraAreglada = palabraSeparada.join('')
// //  console.log(palabraAreglada);

// var numeros = [2,4,5,3,22,6,12];
// numeros.forEach((num) =>{if (num % 2===0) {console.log(num)} })

// var nombres = ["raul ", "atilio "]
// nombres.unshift("pablo ");
// nombres.shift("");
// nombres.push("maria ");
// nombres.push("mario");
// let pos = 1, numElemento = 2
// // let elementosEliminados = nombres.splice(pos, numElemento)
// console.log(nombres);


// var nom = "felipes"
// var nombreSeparados = nom.split('')
// nombreSeparados.pop("")
// nombreSeparados.push(".")
// var unirNombres = nombreSeparados.join('')
// // console.log(unirNombres)

// nombresEstan = nombres.includes("atilio ");
// // console.log(nombresEstan)

// var numeros = [2,4,6,22,8]
// var sumarUno = numeros.map((num) => {return num + 1});
// // console.log("el resultado de sumar uno es " + sumarUno)
// var numerosTienePar = numeros.every ((num) => {return num % 2===0});
// // console.log("numeros es par? "+numerosTienePar);
// // console.log("numeros contiene " + numeros)

// var nombrede = "jeremias"
// var arreglarnombre = nombrede.split ('')
// arreglarnombre.pop("");
// var nombreArreglado = arreglarnombre.join('')
// // console.log(nombreArreglado);

// // numeros.forEach((num) => {console.log(num)})

// var paises = ['Argentina', 'chile'];
// paises.push('Colombia');
// // var ModPaises = paises.at(1);
// // var Mpais = ModPaises.split('');
// // Mpais.shift();
// // Mpais.unshift('C');
// // var LPaises = Mpais.join('');
// // paises[1] = LPaises
// // console.log(LPaises)


// // console.log(paises)

// var letras = ["a","b","c"];
// var iterrador = paises.values();
// for( var letter of paises){
//     console.log(letter);
// }
// let ormiga=0
// for(let i=0;i<10;i++){
//     ormiga = ormiga + i;
//     if (ormiga >33){ console.log("aqui habia un 33")}
   

//     console.log("la variable de iteracion es "+i)
//     console.log("ormiga es "+ ormiga)

// }
// var Numeros = [1,2,3,4,5];
// for(i=0;i<Numeros.length;i++){
//      console.log(Numeros[i])
// };

function encontrarLetraP(string){
    var letras = string.split('');
    for(var i = 0; i < letras.length;i++){
        if (letras[i]==="p"){
            console.log("Letra contiene p minuscula")
        }else if(letras[i]==="P"){
            console.log("Letra contiene P MAYUSCULA")
        }else{console.log("Letra NO contiene P")}
    }
}

encontrarLetraP("paPa")

var Nombres = [];
while(Nombres.length<3){
    Nombres.push("Boom")
}

console.log(Nombres)