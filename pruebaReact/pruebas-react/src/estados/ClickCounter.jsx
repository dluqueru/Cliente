import { useState } from "react";
// Ejercicio 4: Contador de Clics
// Objetivo: Crear un componente que cuente la cantidad de clics 
// que el usuario realiza en un botón.

// Crea un componente ContadorClics.
// Usa useState para definir un estado clics con valor inicial 0.
// Agrega un botón que, cada vez que se presione, incremente el 
// contador de clics en 1.
// Muestra el número total de clics realizados en el componente.
// Extra: Agrega un botón de "Reset" para reiniciar el contador 
// de clics a 0.

function ClickCounter(){

    const[counter, setCounter] = useState(0);

    function addClick(){
        setCounter(counter + 1);
    }

    function reset(){
        setCounter(0);
    }

    return (
        <div>
            <img onClick={addClick} src="src/img/cookie.svg" alt="" />
            <p>{counter}</p>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default ClickCounter;