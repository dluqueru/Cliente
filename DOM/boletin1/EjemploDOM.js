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
console.log(document.querySelectorAll("p"));

// - Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’
console.log(Array.from(document.querySelectorAll("#lipsum p")));

// - El formulario (ojo, no la colección con el formulario sino sólo el formulario)
console.log(Array.from(document.getElementsByTagName("form"))[0]);
console.log(Array.from(document.getElementById("myForm")));

// - Todos los inputs
Array.from(document.getElementsByTagName('input')).forEach(el => console.log(el));
console.log(document.querySelectorAll("input"));

// - Sólo los inputs con nombre ‘sexo’
console.log(Array.from(document.querySelectorAll('input[name="sexo"]')));
console.log(Array.from(document.getElementsByName('sexo')));

// - Los items de lista de la clase ‘important’ (sólo los LI)
console.log(Array.from(document.querySelectorAll('li.important')));


/* Ejercicio 2: Acceso a Nodos Relacionados */
console.log("--- EJERCICIO 2 ---");
/* 2.1. Utiliza document.querySelector() para obtener el primer párrafo dentro del div 
con id "lipsum" en tu página web de ejemplo. Imprime el nodo en la consola. */
const primerP = document.querySelector('#lipsum p');
console.log(primerP);

/* 2.2. Emplea el método nextElementSibling para obtener el siguiente hermano del párrafo
obtenido en el ejercicio 2.1. Imprime el nodo en la consola. */
const segundoP = primerP.nextElementSibling;
console.log(segundoP);

/* 2.3. Utiliza el método parentElement para obtener el elemento padre del párrafo 
obtenido en el ejercicio 2.2. Imprime el nodo en la consola. */
console.log(segundoP.parentElement);

/* 2.4. Obtén por consola, al menos de 2 formas diferentes: */
// - El primér párrafo que hay dentro del div ‘lipsum’
console.log(document.querySelector('div#lipsum p'));
console.log(Array.from(document.querySelectorAll('div#lipsum p'))[0]);

// - El segundo párrafo de ‘lipsum’
console.log(Array.from(document.querySelectorAll('div#lipsum p'))[1]);
console.log(document.querySelector('div#lipsum p').nextElementSibling);

// - El último item de la lista
console.log(Array.from(document.querySelectorAll('ul li'))[3]);
console.log(document.querySelector('ul li:last-child'));

// - La label de ‘Escoge sexo’ 
console.log(document.querySelector('label:last-of-type'));
console.log(Array.from
    (document.querySelectorAll('label'))[document.querySelectorAll('label').length - 1]);


/* Ejercicio 3: Propiedades de Nodos */
console.log("--- EJERCICIO 3 ---");
/* 3.1. Utiliza document.querySelector() para obtener el primer párrafo dentro del div 
con id "lipsum" en tu página web de ejemplo. Almacena este nodo en una variable. */
const primerParrafo = document.querySelector('#lipsum p');
console.log(primerParrafo);

/* 3.2. Utiliza la propiedad innerHTML para obtener el contenido HTML completo del 
párrafo obtenido en el ejercicio 3.1. Imprime el contenido en la consola. */
console.log(primerParrafo.innerHTML);

/* 3.3. Emplea la propiedad textContent para obtener el contenido de texto del párrafo 
obtenido en el ejercicio 3.1. Imprime el contenido en la consola. */
console.log(primerParrafo.textContent);

/* 3.4. Utiliza document.querySelector() para obtener el primer input de tipo "text" 
en tu página web de ejemplo. Almacena este nodo en una variable. */
const primerInput = document.querySelector('input[type="text"]');
console.log(primerInput);

/* 3.5. Usa la propiedad value para obtener el valor del input obtenido en el 
ejercicio 3.5. Imprime el valor en la consola, al menos de 2 formas: */
console.log(primerInput.value);
// - El innerHTML de la etiqueta de ‘Escoge sexo’
console.log(document.querySelector('label:last-of-type').innerHTML);
console.log(document.querySelectorAll('label')[3].innerHTML);

// - El textContent de esa etiqueta
console.log(document.querySelector('label:last-of-type').textContent);
console.log(document.querySelectorAll('label')[3].textContent);

// - El valor del primer input de sexo
console.log(document.querySelector('input[name="sexo"]').value);
console.log(Array.from(document.getElementsByName('sexo'))[0].value);

// - El valor del sexo que esté seleccionado (difícil, búscalo por Internet) */
console.log(document.querySelector('input[name="sexo"]:checked').value);