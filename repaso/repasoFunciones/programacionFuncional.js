/* let arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3]

let todosAprobados = arrayNotas.every(nota => nota >= 5);
let algunosAprobados = arrayNotas.some(nota => nota >= 5);

console.log(todosAprobados);
console.log(algunosAprobados);

let aprobados = arrayNotas.filter(nota => nota >= 5);
console.log(aprobados);

console.log(arrayNotas);
console.log(arrayNotas.findIndex(nota => nota == 9.75)); */


/* Ejercicio 1: Funciones y Arrow Functions

Crea una función llamada saludar que tome un nombre como argumento y muestre un mensaje 
de saludo en la consola. Luego, reescribe la misma función utilizando una arrow function. */

function saludar(nombre){
    return 'Hola, ' + nombre;
}

console.log(saludar("Daniel"));

let saludar2 = nombre => 'Buenas, ' + nombre;

console.log(saludar2('Antonio'));


/* Ejercicio 2: Parámetros y Valores por Defecto

Crea una función llamada potencia que calcule la potencia de un número dado a un exponente dado. 
La función debe tener un valor por defecto de exponente igual a 2. */

let potencia = (num, exp = 2) => {
    let resultado = 1;
    for (let i = 0; i < exp; i++) {
        resultado *= num;
    }
    return resultado;
};


console.log(potencia(3));


/* Ejercicio 3: Funciones de Primera Clase

Crea una función llamada aplica_fn que tome un número y una función como argumentos y aplique la 
función al número. Prueba la función con una función que devuelva el cuadrado del número. */

let aplica_fn = (num, funcion) => funcion(num);

console.log(aplica_fn(4, potencia));


/* Ejercicio 4: Métodos de Programación Funcional

Dado el siguiente array de números [1, 2, 3, 4, 5, 6, 7, 8, 9], realiza las siguientes 
operaciones: */
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Utiliza filter para crear un nuevo array con los números pares. 
let pares = [numArray.filter(num => num % 2 == 0)];
console.log(pares);

// Utiliza map para crear un nuevo array con los cuadrados de los números.
let cuadrados = numArray.map(num => aplica_fn(num, potencia));
console.log(cuadrados);

// Utiliza reduce para calcular la suma de todos los números.
let suma = numArray.reduce((total, num) => total += num, 0);
console.log(suma);

// Utiliza every para verificar si todos los números son mayores que 0.
let todosMayoresQue0 = numArray.every(num => num > 0);
console.log(todosMayoresQue0);

// Utiliza some para verificar si algún número es mayor que 10.
let algunMayoresQue10 = numArray.some(num => num > 10);
console.log(algunMayoresQue10);


/* Ejercicio 5: Copia y Referencia */
const persona = {
    nombre: "Juan",
    edad: 30,
    direccion: {
      calle: "Calle Principal",
      ciudad: "Ciudad"
    }
  };

  // Crea una copia independiente del objeto persona utilizando spread ({...}).
let copia = {... persona};
console.log(copia);

  // Modifica la edad en la copia y verifica si la edad en el objeto original ha cambiado.
copia.edad = 80;

console.log(persona);
console.log(copia);

  // Modifica la calle en la copia y verifica si la dirección en el objeto original ha cambiado.
copia.direccion = "Calle ancha";

console.log(persona);
console.log(copia);


/* Ejercicio 6: Desestructuración de Arrays y Objetos */
const nums = [1, 2, 3, 4, 5];
const objeto = { nombre: "Alice", edad: 25 };

// Utiliza la desestructuración para asignar los valores a las variables a, b, c, d, y e.
let [a, b, c, d, e] = nums;
console.log(d);

// Realiza la misma tarea para el objeto { nombre: "Alice", edad: 25 }.
let {name} = objeto.nombre;
console.log({});


/* Ejercicio 7: Sets y Eliminación de Duplicados */
const nombres = ["Ana", "Juan", "Luis", "Ana", "Luis", "María"];

// Crea un set para eliminar los nombres duplicados.
let nombresSinDuplicados = new Set(nombres);
console.log(nombresSinDuplicados);

// Convierte el set de nuevo en un array y muestra la lista de nombres únicos.
let arrayNombres = Array.from(nombresSinDuplicados);
console.log(arrayNombres);