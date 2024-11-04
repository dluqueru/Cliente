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


// Ejercicio 6: Lista de Usuarios con Opciones de Borrar y Editar

// a) Utiliza JavaScript para capturar los valores del formulario y agregar un nuevo 
// usuario a una lista visible en la página. Cada usuario en la lista debe incluir 
// un botón "Borrar" al lado de su nombre, dirección y dirección de correo electrónico.

// b) Cuando se haga clic en el botón "Borrar" junto a un usuario, debe eliminarse 
// ese usuario de la lista.

// c) Utiliza localStorage para almacenar la lista de usuarios de manera persistente,
//  de modo que los usuarios agregados no se pierdan cuando se actualice la página o 
//  se cierre el navegador.

// Ampliación:

// d) Ahora vamos a permitir que se puedan editar los usuarios, para ello, cuando se 
// añada un usuario a la lista, además del botón borrar, tendrá también un botón editar. 
// Cuando se haga clic en el botón "Editar" junto a un usuario, se cargarán los datos 
// del usuario en los campos del formulario y el botón cambiará a Editar usuario. Al 
// pulsar el botón se cambiarán los datos del usuario en el localStorage. Los cambios 
// realizados deben reflejarse en la lista.