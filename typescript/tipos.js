// 2. Tipos Básicos
// - Crea un archivo tipos.ts y realiza las siguientes tareas:
//   - Declara tres variables: nombre (string), edad (number) y 
//     activo (boolean).
var nombre;
var edad;
var activo;
//   - Asigna valores apropiados y muestra el tipo de cada variable
//     en consola.
nombre = 'Daniel';
edad = 30;
activo = true;
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof activo);
//   - Declara un array numeros que solo acepte valores numéricos e
//     inicialízalo con tres números.
var numeros = [1, 2, 3];
// - Añade un objeto persona con las propiedades nombre , edad y 
//   activo. Muestra sus valores en consola.
var persona = {
    nombre: nombre,
    edad: edad,
    activo: activo
};
console.log(persona);
