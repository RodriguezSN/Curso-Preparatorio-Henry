function cuidadoConElConsoleLog(nombre) {
    console.log(nombre)
    return nombre;
}

function cuidadoConElConsoleLog(nombre){
    return nombre;
}

function cuidadoConElConsoleLog(nombre){
    return nombre;
    console.log(nombre);
}

function otraFuncion() {
    return(
        "El nombre retornado por la funcion 'cuidadoConElConsoleLog' es: " + 
        cuidadoConElConsoleLog("camilo")
    );
}