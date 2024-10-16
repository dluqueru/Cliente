/* Ejercicio 1: Acceso a Elementos del DOM */
console.log("--- EJERCICIO 1 ---");
/* 1.1. Utiliza document.getElementById() para obtener el nodo con el id "lipsum" de 
tu página web de ejemplo. Imprime el nodo en la consola. */
console.log(document.getElementById("lipsum"));

/* 1.2. Usa document.getElementsByClassName() para obtener todos los elementos con 
la clase "error" en tu página web de ejemplo. Imprime la colección en la consola. */
let arrayErrores = Array.from(document.getElementsByClassName("important"));
arrayErrores.forEach(el => console.log(el));

/* 1.3. Utiliza document.getElementsByTagName() para obtener todos los elementos 
<p> de tu página web de ejemplo. Imprime la colección en la consola. */
let todosLosP = Array.from(document.getElementsByTagName('p'));
console.log(todosLosP);

/* 1.4. Emplea document.querySelector() para obtener el primer párrafo con la clase 
"error" en tu página. Imprime el nodo en la consola. */
console.log(document.querySelector('p.important').textContent);

/* 1.5. Usa document.querySelectorAll() para obtener todos los párrafos con la clase 
"error" en tu página. Imprime la colección en la consola. */
console.log(Array.from(document.querySelectorAll('p.important'))[0].textContent);

/* 1.6. Obtén por consola, al menos de 2 formas diferentes: */
// - El elemento con id ‘input2’ 
console.log(document.getElementById("input2"));
console.log(document.querySelector("input:nth-of-type(2)"));

// - La colección de párrafos
console.log(Array.from(document.getElementsByTagName('p')));

// - Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’
console.log(Array.from(document.querySelectorAll("#lipsum p")));

// - El formulario (ojo, no la colección con el formulario sino sólo el formulario)
console.log(Array.from(document.getElementsByTagName("form"))[0]);

// - Todos los inputs
Array.from(document.getElementsByTagName('input')).forEach(el => console.log(el));

// - Sólo los inputs con nombre ‘sexo’
console.log(Array.from(document.querySelectorAll('input[name="sexo"]')));

// - Los items de lista de la clase ‘important’ (sólo los LI)