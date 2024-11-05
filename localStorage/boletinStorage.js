// Ejercicio 2: Almacenando Datos Primitivos

// a) Utilizando localStorage, almacena tu nombre en el navegador bajo la clave "nombre". 
// JSON.stringify("loquesea") para pasarlo a string
localStorage.setItem("nombre", JSON.stringify("Daniel"));

// b) Recupera el nombre almacenado en localStorage y muestra su valor en la consola.
// JSON.parse(bla) para poder leerlo como un string
console.log(JSON.parse(localStorage.getItem("nombre")));


// Ejercicio 3: Eliminando Datos Primitivos

// a) Utilizando localStorage, almacena tu edad bajo la clave "edad". 
localStorage.setItem("edad", JSON.stringify(29));

// b) Utiliza la función adecuada para eliminar la clave "edad" de localStorage. 
console.log(localStorage);
localStorage.removeItem('edad');

// c) Verifica si la clave "edad" aún existe en localStorage.
console.log(localStorage);


// Ejercicio 4: Almacenando y Recuperando Objetos

// a) Crea un objeto JavaScript que represente una persona con propiedades como
// "nombre", "edad" y "ciudad". 
const persona = {
    nombre: "Daniel",
    edad: 29,
    ciudad: "Sevilla"
};

// b) Utiliza JSON.stringify para convertir este objeto en una cadena JSON. 
const personaJSON = JSON.stringify(persona);

// c) Almacena la cadena JSON en localStorage bajo la clave "persona".
localStorage.setItem("persona", personaJSON);

// d) Recupera la cadena JSON de localStorage y utiliza JSON.parse para convertirla
// de nuevo en un objeto JavaScript. 
console.log(localStorage);
const personaParsed = JSON.parse(localStorage.getItem('persona'));

// e) Muestra en la consola alguna propiedad del objeto recuperado.
console.log(personaParsed.ciudad);


// Ejercicio 5: Eliminando Objetos

// a) Utilizando localStorage, almacena un objeto cualquiera bajo una clave de tu elección. 
const persona2 = {
    nombre: "Cristina",
    edad: 31,
    ciudad: "Sevilla"
};
localStorage.setItem('cristina', JSON.stringify(persona2));
console.log(localStorage);

// b) Utiliza la función adecuada para eliminar la clave que contiene el objeto. 
localStorage.removeItem('cristina');

// c) Verifica si la clave que contiene el objeto aún existe en localStorage.
console.log(localStorage);