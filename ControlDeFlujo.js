function Destino(D){
    if ( D === "Brasil"){
        console.log("doble a la IZQUIERDA")
    } else if (D === "Argentina"){
        console.log("doble a la DERECHA");
    } else if (D === "CHILE"){
        console.log("siga DERECHO")
    } else {
        console.log("nos PERDIMOS")
    }
}

Destino("mexico")

function TienePermisoDeManejar(PuedeManejar){
    if (PuedeManejar >= 72){
        console.log(false)
    } else if (PuedeManejar <= 17){
        console.log(false)}
    else { 
    console.log(true)  }
}

TienePermisoDeManejar(8)

function Temperatura(clima){
    if (clima === "soleado"){
        return "llevar agua ";
    } else if (clima === "nublado"){
        return "llevar campera ";
    }else if (clima === "lluvia"){
        return "llevar paraguas ";
        }
}

function Recordatorio(){
    if (Temperatura === "llevar agua ") 
     return ( 
        Temperatura + "Y ponerse una gorra "
    ); else if (Temperatura === "llevar campera ")
        return (
            Temperatura + "Y ponerse bufanda "
        ); else if (Temperatura === "llevar paraguas " )
        return (
            Temperatura + "llevar cambio de ropa"
        )
    
}