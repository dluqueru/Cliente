/* Ejercicio 1: Creación y Adición de Nodos */
console.log("--- EJERCICIO 1 ---");
/* 1.1. Utiliza document.createElement('etiqueta') para crear un nuevo elemento HTML
<div> . Asigna este elemento a una variable llamada nuevoDiv . */
const nuevoDiv = document.createElement("div");

/* 1.2. Usa document.createTextNode('texto') para crear un nuevo nodo de texto con el
contenido "Nuevo elemento de lista". Asigna este nodo a una variable llamada textoNuevo . */
const textoNuevo = document.createTextNode("Nuevo elemento de lista");

/* 1.3. Utiliza nuevoDiv.appendChild(nuevoNodo) para agregar textoNuevo como hijo del
nuevoDiv . Luego, agrega nuevoDiv como último hijo del elemento con el id "lipsum" en tu
página web de ejemplo. */
nuevoDiv.appendChild(textoNuevo);
const lipsum = document.querySelector("#lipsum");
lipsum.appendChild(nuevoDiv);

/* 1.4. Añade a la página:
Un nuevo párrafo al final del DIV ‘lipsum’ con el texto “Nuevo párrafo añadido por
javascript” (fíjate que una palabra esta en negrita) */
const nuevoP = document.createElement('p');
const negrita = document.createElement('b');
negrita.appendChild(document.createTextNode("añadido "));
const texto1 = document.createTextNode('Nuevo párrafo ');
const texto2 = document.createTextNode('por javascript');

nuevoP.appendChild(texto1);
nuevoP.appendChild(negrita);
nuevoP.appendChild(texto2);
lipsum.appendChild(nuevoP);

/* Un nuevo elemento al formulario tras el ‘Dato 1’ con la etiqueta ‘Dato 1 bis’ y el 
INPUT con id ‘input1bis’ que al cargar la página tendrá escrito “Hola” */
const dato1 = document.querySelector('label');
const nuevoElemento = document.createElement('label');
const nuevoInput = document.createElement('input');
const br = document.createElement('br');

nuevoInput.setAttribute('id','input1bis');
nuevoInput.setAttribute('placeholder','Hola');

nuevoElemento.appendChild(document.createTextNode('Dato 1 bis '));
nuevoElemento.appendChild(nuevoInput);
nuevoElemento.appendChild(br);
dato1.after(nuevoElemento);


/* Ejercicio 2: Inserción de Nodos */
console.log("--- EJERCICIO 2 ---");
/* 2.1. Utiliza document.querySelector() para obtener el primer párrafo dentro del div 
con id "lipsum" en tu página web de ejemplo. Almacena este nodo en una variable llamada
primerParrafo . */


/* 2.2. Crea un nuevo elemento <p> con el texto "Este es el nuevo segundo párrafo" y
almacénalo en una variable llamada nuevoParrafo . */


/* 2.3. Utiliza el método primerParrafo.before(nuevoParrafo) para insertar nuevoParrafo
antes del primer párrafo dentro del div "lipsum". */