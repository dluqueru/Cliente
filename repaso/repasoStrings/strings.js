/* 1. Escribe una función llamada longitud que 
reciba como parámetro de entrada una cadena de 
texto y devuelva el número de letras que tiene.
Por ejemplo la siguiente llamada a la función:
longitud("Ana"). Debería devolver 3. */

function longitud(string){
    return string.length;
}

console.log(longitud("ana"));


/* 2. Escribe una función llamada devuelvePrimeraLetra 
que reciba como parámetro de entrada una cadena de 
texto y devuelva la primera letra. */

function devuelvePrimeraLetra(string){
    return string.charAt(0);
}

console.log(devuelvePrimeraLetra("Ana"));


/* 3. Escribe una función llamada devuelveUltimaLetra que 
reciba como parámetro de entrada una cadena de texto y devuelva la última letra. */

function devuelveUltimaLetra(string){
    return string.charAt(string.length - 1);
}

console.log(devuelveUltimaLetra("Ana"));


/* 4. Escribe una función llamada devuelveEnesimaLetra que reciba como parámetro 
de entrada una cadena de texto y un número y devuelva la letra que ocupe la 
posición indicada por el número. */

function devuelveEnesimaLetra(string, number){
    return string.charAt(number);
}

console.log(devuelveEnesimaLetra("Ana", 1));


/* 5. Utilizando el método substring imprimir las letras que van desde la 
posición 3 a la 7 de la cadena «wonderful day», es decir “derf”. */

console.log("wonderful day".substring(3, 7));


/* 6. Hacer una función devuelveMasLarga que reciba como parámetro de entrada dos 
cadenas de texto y devuelva la mayor. En caso de que ambas cadenas sean iguales, 
devolveremos la correspondiente al primer parámetro de la función. */

function devuelveMasLarga(str1, str2){
    let longest;

    if(str1.length == str2.length || str1.length > str2.length){
        longest = str1;
    } else if(str1.length < str2.length){
        longest = str2;
    }

    return longest;
}

console.log(devuelveMasLarga("laaaaaaaaaarga", "corta"));


/* 7. Hacer una función devuelveMasLarga2 que reciba como parámetro de entrada tres 
cadenas de texto y devuelva la mayor. En caso de que al menos dos cadenas tengan igual 
longitud, devolveremos el texto Hay al menos dos cadenas iguales. */

function devuelveMasLarga2(str1, str2, str3){
    let longest;

    if(str1.length > str2.length && str1.length > str3.length){
        longest = str1;
    } else if(str2.length > str1.length && str2.length > str3.length){
        longest = str2;
    } else if(str3.length > str1.length && str3.length > str2.length){
        longest = str3;
    } else if(str1.length == str2.length || str2.length == str3.length){
        longest = "Hay al menos dos cadenas iguales.";
    }

    return longest;
}

console.log(devuelveMasLarga2("aaaa", "aaaa", "a"));


/* 8. Hacer una función generarNombre que reciba como parámetros de entrada tres cadenas
 de texto. Si la longitud de alguna cadena cadena es menor que cinco, la función debe 
 devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva 
 palabra utilizando las tres primeras letras de cada palabra */

 function generarNombre(str1, str2, str3){
    let word = "";

    if(str1.length < 5 || str2.length < 5 || str3.length < 5){
        word = "error";
    } else {
        word += str1.substr(0, 3) + str2.substr(0, 3) + str3.substr(0, 3);
    }

    return word;
 }

 console.log(generarNombre("aaaaa", "bbbbb", "ccccc"));


 /* 9. Hacer una función generarNombre2 que reciba como parámetros de entrada tres cadenas
  de texto. Si la longitud de alguna cadena cadena es menor que cinco, la función debe devolver 
  el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra 
  utilizando la última letra de cada palabra. */

  function generarNombre2(str1, str2, str3){
    let word = "";

    if(str1.length < 5 || str2.length < 5 || str3.length < 5){
        word = "error";
    } else {
        word += str1.charAt(str1.length - 1) + str2.charAt(str2.length - 1) + str3.charAt(str3.length - 1);
    }

    return word;
  }

  console.log(generarNombre2("abcde", "fghij", "klmno"));


  /* 10. Hacer una función generarNombre3 que reciba como parámetros de entrada tres cadenas 
  de texto. Si la longitud de alguna cadena cadena es menor que cinco, la función debe devolver 
  el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra 
  utilizando las tres últimas letras de cada palabra. */

  function generarNombre3(str1, str2, str3){
    let word = "";

    if(str1.length < 5 || str2.length < 5 || str3.length < 5){
        word = "error";
    } else {
        word += str1.substr(str1.length - 3, str1.length - 1) + str2.substr(str2.length - 3, str2.length - 1) + str3.substr(str3.length - 3, str3.length - 1);
    }

    return word;
  }

  console.log(generarNombre3("abcde", "fghij", "klmno"));


  /* 11. Hacer una función tieneLetra que reciba como parámetro de entrada una cadena de texto 
  y una letra y devuelva true si la letra esta presente en la palabra y false si no lo esta. 
  Utilizar para ello el método indexOf. */

  function tieneLetra(str, letter){
    let found = false

    if(str.indexOf(letter) == 1){
        found = true
    }

    return found;
  }

  console.log(tieneLetra("casa", "w"));


  /* 12. Realizar la evaluación del ejercicio anterior sin tener en cuenta si la letra pasada 
  como parámetro esta en mayúsculas o minúsculas */

  function tieneLetra2(str, letter){
    let found = false

    if(str.toLocaleUpperCase().indexOf(letter.toLocaleUpperCase()) == 1){
        found = true
    }

    return found;
  }

  console.log(tieneLetra2("casa", "A"));


/* 13. Hacer una función crearPalabra que reciba como parámetro de entrada una letra y un 
número y genere una nueva palabra que tenga la letra introducida repetida tantas veces como 
indique el número. */

function crearPalabra(letter, number){
    let word = "";

    for(let i = 0; i <= number; i++){
        word += letter;
    }

    return word;
}

console.log(crearPalabra("a", 5));


/* 14. Completar el ejercicio anterior haciendo que en la nueva palabra generada las letras 
esten en mayúsculas. */

function crearPalabra2(letter, number){
    let word = "";

    for(let i = 0; i <= number; i++){
        word += letter.toLocaleUpperCase();
    }

    return word;
}

console.log(crearPalabra2("a", 5));


/* 15. Hacer una función addGuiones que reciba como parámetro de entrada una cadena texto y 
devuelva una nueva cadena que tendrá un guion medio detrás de cada letra. Utilizar para ello
un bucle for. */

function addGuiones(string){
    let result = "";

    for(let i = 0; i < string.length; i++){
        if(string.charAt(i) != " "){
            if(i == string.length -1){
                result += string.charAt(i);
            } else {
                result += string.charAt(i) + "-";
            }
        }
    }

    return result;
}

console.log(addGuiones("Dame guiones"));


/* 16. Hacer una función contadorDeLetras que reciba como parámetro de entrada una cadena 
de texto y una letra y devuelva el número de veces que esa letra esta presente en la palabra. 
Utilizar para ello un bucle for. */

function contadorDeLetras(string, letter){
    let counter = 0;

    for(let i = 0; i <= string.length; i++){
        if(string.charAt(i) == letter){
            counter++
        }
    }

    return counter;
}

console.log(contadorDeLetras("casa", "a"));


/* 17. Realizar la evolución del ejercicio anterior sin tener en cuenta si la letra pasada 
como parámetro esta en mayúsculas o minúsculas */

function contadorDeLetras2(string, letter){
    let counter = 0;

    for(let i = 0; i <= string.length; i++){
        if(string.charAt(i).toLocaleUpperCase() == letter.toLocaleUpperCase()){
            counter++
        }
    }

    return counter;
}

console.log(contadorDeLetras2("casA", "A"));


/* 18. Hacer una función contadorDeLetras3 que reciba 
como parámetro de entrada dos cadenas de texto y una letra y devuelva la cadena de texto
en la que dicha letra esta más presente. Utilizar para ello un bucle for. 
No tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas.  */

function contadorDeLetras3(str1, str2, letter){
    let counter1 = 0;
    let counter2 = 0;
    let result;

    for(let i = 0; i <= str1.length; i++){
        if(str1.charAt(i).toLocaleUpperCase() == letter.toLocaleUpperCase()){
            counter1++;
        }
    }

    for(let i = 0; i <= str2.length; i++){
        if(str2.charAt(i).toLocaleUpperCase() == letter.toLocaleUpperCase()){
            counter2++;
        }
    }

    if(counter1 > counter2){
        result = str1;
    } else if(counter2 > counter1){
        result = str2;
    }

    return result;
}

console.log(contadorDeLetras3("casa", "pAlangAnA", "a"));


/* 19. Escribe una función llamada toCase que reciba como parámetro de entrada una cadena
de texto y devuelva esa misma cadena de texto en minúsculas, un guión medio y de nuevo 
esa misma cadena de texto en mayúsculas. Por ejemplo, la siguiente llamada a la función:

toCase("Pablo");
Debería devolver: pablo-Pablo */

function toCase(string){
    return string.toLocaleLowerCase() + "-" + string.toLocaleUpperCase();
}

console.log(toCase("Pablo"));


/* 20. Escribe una función llamada shortcut que tome dos cadenas de texto y devuelva la 
inicial de cada una de las dos cadenas. Por ejemplo, la llamada a la función:

shortcut('Amnesty', 'International');
Debería devolver «AI». */

function shortcut(str1, str2){
    return str1.charAt(0) + str2.charAt(0);
}

console.log(shortcut('Amnesty', 'International'));


/* 21. Escribe una función llamada firstChar, que devuelva la primera letra que no sea 
un espacio cuando una cadena de texto es pasada. Para ello, podemos eliminar los espacios 
en blanco que pudiera haber al principio y al final de la cadena de texto utilizando el método
 trim(). Si no estás muy seguro de como funciona este método, consúltalo en internet, 
 que no es tan difícil!. Por ejemplo, la llamada a la función:

firstChar(" Rosa Parks ");
Debería devolver R. */

function firstChar(string){
    return string.trim().charAt(0);
}

console.log(firstChar(" Rosa Parks "));


/* 22. Escribe una función llamada indexOfIgnoreCase que reciba dos cadenas de texto y devuelva 
la posición de la primera ocurrencia de la segunda cadena de texto en la primera. La función
no debería tener en cuenta mayúsculas y minúsculas. Por ejemplo:

indexOfIgnoreCase("bit","it");
y
indexOfIgnoreCase("bit","IT");
deberían devolver 1 */

function indexOfIgnoreCase(str1, str2){
    result = "error";

    if(str1.toLocaleUpperCase().includes(str2.toLocaleUpperCase())){
        result = str1.toLocaleUpperCase().indexOf(str2.toLocaleUpperCase())
    }
    return result
}

console.log(indexOfIgnoreCase("bit","it"));
console.log(indexOfIgnoreCase("bit","IT"));


/* 23. Escribe una función llamada firstWord que reciba como parámetro de entrada una cadena 
de texto y devuelva la primera palabra de esa cadena. La primera palaba de la cadena serán 
todos los caracteres que hay hasta el primer espacio. Por ejemplo:

firstWord("see and stop");
debería devolver «see». */

/*
function firstWord(string){
    let word="";

    for(let i = 0; i <= string.length; i++){
        word += string.charAt(i)
        if(string.charAt(i) == " ")
            return word;
    }

    return word;
}
*/
 // Elegante
function firstWord(string){
    return string.split(" ")[0]
}

console.log(firstWord("see and stop"));


// Parte 2
/* 1. Crea una función llamada saludoPersonalizado que tome un nombre y una edad como 
argumentos y utilice un template literal para devolver un saludo personalizado que incluya 
el nombre y la edad. */

function saludoPersonalizado(name, age){
    return `Buenas tardes, ${name}, tienes ${age} años`
}

console.log(saludoPersonalizado("Daniel", 29));


/* 2. Utiliza un template literal para crear una cadena que muestre una lista de compras 
con varios elementos. Luego, muestra esa cadena en la consola. */

let el1 = "manzana";
let el2 = "naranja";
let el3 = "plátano";

let lista = `${el1}, ${el2}, ${el3}`

console.log(lista);


/* 3. Escribe una función llamada informacionProducto que tome un objeto con información 
de un producto (nombre, precio, categoría, etc.) y utilice un template literal para generar 
una descripción del producto. Luego, muestra esa descripción en la consola. */

function informacionProducto(obj){
    return `${obj.nombre}, ${obj.precio}, ${obj.categoria}`
}

let obj = {
    nombre: "teclado",
    precio: 10,
    categoria: "informática"
}

console.log(informacionProducto(obj));


// Parte 3
/* DNI y Letra

Implementa una función llamada validarDNI que tome un número de DNI (con o sin letra) 
como argumento y determine si es un DNI válido. La función debe calcular la letra 
correspondiente al número y compararla con la letra proporcionada (si se proporciona). 
Devuelve true si es válido y false si no lo es.

Prueba la función validarDNI con varios números de DNI, incluyendo algunos con letra y 
otros sin ella. */

function validarDNI(num){
    const letras = "trwagmyfpdxbnjzsqvhlcke";
    let valido = false;
    let numeroDni = num.substring(0,8);

    if(numeroDni%letras.length == letras.indexOf(num.charAt(8).toLocaleLowerCase())){
        valido = true;
    }

    return valido;
}

console.log(validarDNI('53354988W'));