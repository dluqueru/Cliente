//Ejercicio 1
function evaluarEdad(num){
    let respuesta;
    if(num < 18){
        respuesta = "Eres menor de edad";
    } else if(18 <= num && num <= 65){
        respuesta = "Eres adulto";
    } else if(num > 65 && num <= 120){
        respuesta = "Eres adulto mayor";
    } else if(num > 120 || num < 0){
        respuesta = "Edad no válida";
    }

    return respuesta;
}

//Ejercicio 2
function mostrarImpares(numArray){
    let arrayImpares = [];

    for(let i = 0; i <= numArray.length; i++){
        if(i % 2 != 0){
            arrayImpares.push(numArray[i]);
        }
    }

    return arrayImpares;
}

let numeros = [10, 25, 32, 47, 50, 61, 78, 83];
console.log(mostrarImpares(numeros));

//Ejercicio 3
function factorial(num){
    let resultado = 1;

    for(let i = num; i >= 1; i--){
        resultado *= i;
    }

    return resultado;
}

console.log(factorial(5));

//Ejercicio 4
function invertirCadena(cadena){
    let cadenaInvertida = "";

    for(let i = cadena.length -1; i >= 0; i--){
        cadenaInvertida += cadena[i];
    }

    return cadenaInvertida;
}

console.log(invertirCadena("javascript"));