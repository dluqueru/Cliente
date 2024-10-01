let textoEntrada


function mostrarTexto(){
    if(document.getElementById("textoEntrada").length != 0){
        document.getElementById("resultadoTexto") = document.getElementById("textoEntrada");
    }
}

document.getElementById("botonMostrar").addEventListener("click", mostrarTexto)