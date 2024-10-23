/* Ejercicio 1: Eventos Básicos
1.1. Crea una página HTML con un botón. Agrega un escuchador de eventos para que 
cuando se haga clic en el botón, se muestre un mensaje en la consola del navegador. */
const boton = document.getElementById('boton');
boton.addEventListener('click', () => console.log('Se hizo click'));

// 1.2. Agrega otro elemento HTML (por ejemplo, un enlace) en la página y agrega un 
// escuchador de eventos para que cuando se pase el mouse sobre el elemento, el color 
// de fondo cambie.
const enlace = document.getElementById('enlace');
enlace.addEventListener('mouseenter', () => enlace.classList.toggle('coloreado'));
enlace.addEventListener('mouseleave', () => enlace.classList.toggle('coloreado'));

// 1.3. Agrega un escuchador de eventos al elemento document.body para que cuando se 
// mueva el ratón en cualquier punto de la ventana del navegador, muestre en algún 
// elemento (puedes agregar un <div> o <p> al HTML) la posición del puntero respecto
// al navegador y respecto a la página.
const divX = document.createElement('div');
const divY = document.createElement('div');
const br = document.createElement('br');

// document.body.addEventListener('mouseover', (e) => {
//     divX.appendChild(document.createTextNode(e.screenX));
//     divY.appendChild(document.createTextNode(e.screenY));
//     enlace.after(divX);
//     divX.after(br)
//     br.after(divY);
//     divY.after(br)
// });


// Ejercicio 2: Escuchar eventos de teclado
// 2.1 Agrega un escuchador de eventos al elemento document.body para que cuando se 
// presione cualquier tecla, muestre un mensaje de alerta con el nombre de la tecla 
// pulsada y su código.
document.body.addEventListener('keydown', function(e) {
    if(e.key == " "){
        alert(`Tecla pulsada: BARRA ESPACIADORA, código: ${e.code}`)
    } else {
        alert(`Tecla pulsada: ${e.key}, código: ${e.code}`)}})

// 2.2 Prueba el escuchador de eventos con diferentes teclas para verificar que muestra 
// correctamente el nombre y el código de la tecla pulsada.


// Ejercicio 3: Captura y Propagación
// 3.1. Crea una lista desordenada (<ul>) con varios elementos de lista (<li>) dentro. 
// Agrega un escuchador de eventos al elemento <ul> para que cuando se haga clic en 
// cualquier elemento de la lista, se muestre un mensaje en la consola indicando el 
// texto del elemento clickeado.
const lista = document.querySelector('ul');
lista.addEventListener('click', (e) => console.log(e.target.innerHTML));

// 3.2. Modifica el ejercicio anterior para que el mensaje en la consola muestre el 
// nivel de jerarquía en el DOM del elemento clickeado. Por ejemplo, si se hace clic en 
// un <li>, el mensaje podría decir "Clickeaste en un elemento de nivel 2".
lista.addEventListener('click', function(e) { 
    if(e.target.innerHTML != 'Pan'){
        console.log(e.target.innerHTML)}
    }
);
