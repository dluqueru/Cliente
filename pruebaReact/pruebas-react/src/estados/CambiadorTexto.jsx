import { useState } from "react";

// Ejercicio 2: Cambiador de Texto
// Objetivo: Crear un componente que muestre un texto y lo 
// cambie al hacer clic en un botón.

// Crea un componente CambiadorTexto.
// Usa useState para definir un estado texto con el valor 
// inicial "Texto Original".
// Agrega un botón que, al hacer clic, cambie el texto a
//  "Texto Modificado".
// Extra: Crea un segundo botón para restaurar el texto al original.

function CambiadorTexto() {
    const origen = "Texto Original";

    const[text, setText] = useState(origen);

    function modificaTexto(){
        setText("Texto Modificado");
    }

    function textoOriginal(){
        setText(origen);
    }

    return (
        <div>
            <p>{text}</p>
            <button onClick={modificaTexto}>Cambiar texto</button>
            <button onClick={textoOriginal}>Texto original</button>
        </div>
    );
}

export default CambiadorTexto;