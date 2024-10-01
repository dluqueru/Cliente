function validarFormulario(){
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;

    if(nombre.length == 0){
        alert("El campo nombre no puede estar vacío");
    } else if(edad < 18 || edad > 100){
        alert("El campo edad contiene valor incorrecto");
    } else if(correo.length == 0){
        alert("El campo correo no puede estar vacío");
    }
}

document.getElementById("boton").addEventListener("click", validarFormulario);