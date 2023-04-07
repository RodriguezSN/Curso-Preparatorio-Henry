var suma = 0;
//suma = suma + 1;
//suma = suma + 2;
//suma = suma + 3;
//suma = suma + 4;
//console.log(suma);

// for(var i=0 ; i<20 ; i++){
//     suma = suma + i;
//     console.log("variable de iteracion " , i);
// }
// console.log("variable suma ", suma)

// while (suma < 20){
//     if(suma === 15){
//         continue
//     }
//     suma = suma + 1;
//     console.log(suma);
// }

// for (var i = 0; i < 20; i++){
//     if (i === 15){
//         continue
//     }
//     console.log(i)
// }

// for (var numPar = 1.5; numPar < 20; numPar ++){
 
//     console.log(numPar)
// }
var num = 0

// do{
//   num = num + 5;
//   if (num  === 40){
//     break
//   }
//   console.log(num)
// }while (num < 100)

// while (num < 100){
//   num = num + 5
//   if(num === 40){
//     continue
//   }
//   console.log(num)
// }

// for(var nu = 0;nu <= 100; nu = nu + 5){
//   if (nu === 40){
//     continue
//   }
// console.log(nu)
// }

var decimal = 0

do{
  decimal =decimal + 0.5
  if(decimal % 2===0){
    continue
  }
  console.log(decimal) 
}while(decimal < 20)
console.log("Resultado de decimal es " + decimal)