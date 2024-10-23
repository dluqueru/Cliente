// Opción 1 -directamente al html
function firstClick(event){
    console.log(event.type);
}

// Opción 2 - adjuntar la función al elemento
let segundoBoton = document.querySelector('.second_button');
segundoBoton.onclick = function () {
    alert("¡Hiciste clic en el segundo botón!");
}

// Opción 3 - usar addEventListener
let tercerBoton = document.querySelector('.third_button');
tercerBoton.addEventListener("click", firstClick);


// let listElements = document.querySelectorAll('li');
// listElements.forEach(element => element.addEventListener('click', (event) => alert(`Has hecho click en ${event.target.textContent}`)))

const list = document.querySelector('ul');
list.addEventListener('click', (event) => alert(`Has hecho click en ${event.target.parentElement.textContent}`));

let input = document.getElementById('input');
input.addEventListener('keyup', (e) => console.log(`Se ha pulsado la tecla ${e.key}`))