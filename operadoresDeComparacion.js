console.log(4 < 7);
console.log(4 < 1);
console.log(4 > 4);
console.log(4 == 7);


//igualdad vs igualdad estricta
3 == 3;
3 === 3;
3 == "3";
3 === "3";

//asignacion y asociatividad
var a = 1;
var b = 2;
var c = (a = b); //asociatividad a la derecha A es igual a B y C igual a A

console.log(a);//2
console.log(b);//2
console.log(c);//2

//por ejemplo la divicion tiene una asociatividad a la izquierda
console.log(16 / 2 / 4) //16 divido 2 es 8 y 8 divido 4 es igual a 2