// Ejercicio 5: Límite de Clics
// Objetivo: Crear un contador que solo permita aumentar 
// hasta un límite específico, por ejemplo, 5.

import { useState } from "react";

// Crea un componente LimiteContador.
// Usa useState para definir un estado contador con valor inicial 0.
// Agrega un botón que incremente el contador hasta un máximo de 5.
// Si el contador ya está en 5, el botón no debería hacer nada o 
// debería estar deshabilitado.
// Extra: Agrega un botón "Reset" para restablecer el contador a 0.

function ClickLimiter(){

    const[limiteCounter, setLimiteCounter] = useState(0);

    function addClick(){
        limiteCounter < 5 && setLimiteCounter(limiteCounter + 1);
    }

    function reset(){
        setLimiteCounter(0);
    }

    return (
        <div>
            <img onClick={addClick} src="src/img/cookie.svg" alt="" />
            <p>{limiteCounter}</p>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default ClickLimiter;