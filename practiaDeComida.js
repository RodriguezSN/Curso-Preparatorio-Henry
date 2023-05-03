

//     var arroz = 2;
//     var agua = 1.5;
//     var persona = 0;
   
// while(persona <= 4) {
// arroz = arroz + 2;
// agua = agua + 1.5;
// persona = persona +1
// }
// console.log(persona["la cantidad de arroz es " + arroz,"la cantidad de agua es "+agua])





// function negocio (x){
//     if (x === "galletita"){
//         return "cual desea?"
//     } else {
//         return "que quiere comprar"
//     }
// }

// function negocio2(x){
//     if (negocio === "cual desea"){
//         return oreo, pepa;
//     }
// }

// switch (negocio){
//     case "galletita":
//         return "tenemos galletitas de pitusas o de oreo"; 
//         break;
//     case "gaseosa":
//         return "tenemos coca o manaos"; 
//         break;
//     default:
//         return "no tengo eso, otra cosa que desee?";
//         break;
// }

// direcciones ("");

// function direcciones(caminos){
//     if (caminos == "moreno"){
//         console.log("tome la rotonda a la derecha")
//     }else if (caminos == "merlo"){
//         console.log("tome la primera salida a la izquierda")
//     }else if (caminos == "paso del rey"){
//         console.log ("continue hasta la proxima salida a 3km")
//     }else if (caminos == "capital"){
//         console.log("continue hasta general paz y luego a la izquierda")
//     }else {
//         console.log("estamos perdidos we")  }
// }


// function suma(x){
//     console.log(x+4)
// }
// suma(4)}

function tipo(edad){
    if (edad >= 3 && edad <= 11){
        console.log("aun es un niño")
    }else if (edad >= 12 && edad <=17){
        console.log("es un adolecente")
    }else if (edad >=18 && edad <= 24){
        console.log("es un hombre")
    }else if(edad >= 25 && edad <= 35){
        console.log("es un adulto")
    }else if (edad >= 36 && edad <= 45){
        console.log("es un hombre grande")
    }else if (edad >= 46 && edad <= 64){
        console.log("es un hombre casi mayor")
    }else if(edad >= 65 && edad <=99){
        console.log("debe estar jubilado el viejo")
    }else if(edad >= 0 && edad <=2){
        console.log("es un bebe")
    }else if (edad >= 100){
        console.log("DEBE ESTAR MUERTO")
    }else{
        console.log("especifique la edad")
    }
}
tipo();

