import { useState } from "react";

// Ejercicio 3: Mostrar/Ocultar Información
// Objetivo: Crear un componente que permita mostrar y ocultar una 
// sección de información al hacer clic en un botón.

// Crea un componente MostrarOcultar.
// Usa useState para crear un estado booleano mostrar que controle 
// la visibilidad del contenido.
// Agrega un botón que alterne el valor de mostrar entre true y false.
// Muestra un texto como "Información secreta" solo si mostrar es true.
// Extra: Cambia el texto del botón para que diga "Mostrar" u "Ocultar"
// según corresponda.

function MostrarOcultar() {

    const[mostrar, setMostrar] = useState(true);

    function toggleVisibility(){
        mostrar ? setMostrar(false) : setMostrar(true);
    }

    let textContentButton = "";
    let texto = "";
    
    mostrar ? textContentButton = "Ocultar" : textContentButton = "Mostrar";
    mostrar ? texto = "Aquí está el contenido secreto" : "";

    return (
        <div>
            <p>{texto}</p>
            <button onClick={toggleVisibility}>{textContentButton}</button>
        </div>
    );
}

export default MostrarOcultar;