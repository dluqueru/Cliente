import { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(0);

    function incrementar() {
        setContador(contador + 1);
    }

    function decrementar() {
        if(contador > 0){
            setContador(contador - 1);
        }
    }

    function reset(){
        setContador(0);
    }

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={decrementar}>-</button>
            <button onClick={incrementar}>+</button>
            <br />
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Contador;