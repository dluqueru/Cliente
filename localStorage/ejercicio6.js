// Ejercicio 6: Lista de Usuarios con Opciones de Borrar y Editar

// a) Utiliza JavaScript para capturar los valores del formulario y agregar un nuevo 
// usuario a una lista visible en la página. Cada usuario en la lista debe incluir 
// un botón "Borrar" al lado de su nombre, dirección y dirección de correo electrónico.
const ul = document.getElementById('userList');

function addUser(){
    const nombre = document.getElementById('name').value;
    const direccion = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const btn = document.createElement('button');

    btn.appendChild(document.createTextNode('Borrar'));
    
    btn.addEventListener("click", function() {
        btn.parentElement.remove();
    });

    const usuario = nombre + " | " + direccion + " | " + email;

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(usuario));
    li.appendChild(btn);
    ul.appendChild(li);
}

document.addEventListener('submit', function(e) {
    e.preventDefault();
    addUser();
});

// b) Cuando se haga clic en el botón "Borrar" junto a un usuario, debe eliminarse 
// ese usuario de la lista.
// DONE línea 14
// c) Utiliza localStorage para almacenar la lista de usuarios de manera persistente,
//  de modo que los usuarios agregados no se pierdan cuando se actualice la página o 
//  se cierre el navegador.
function guardarLocal(){
    localStorage.setItem('listaUsuarios', JSON.stringify(ul.innerHTML));
}

document.getElementById('local').addEventListener('click', function(e) {
    e.preventDefault();
    guardarLocal();
})

console.log(JSON.parse(localStorage.getItem('listaUsuarios')));

function rellenarLista(){
    const listaJSON = JSON.parse(localStorage.getItem('listaUsuarios'))
    const listArray = listaJSON.split('</li>');

    listArray.forEach(element => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(element));
        ul.appendChild(li);
    });
    console.log(listArray);
}

rellenarLista();

// Ampliación:

// d) Ahora vamos a permitir que se puedan editar los usuarios, para ello, cuando se 
// añada un usuario a la lista, además del botón borrar, tendrá también un botón editar. 
// Cuando se haga clic en el botón "Editar" junto a un usuario, se cargarán los datos 
// del usuario en los campos del formulario y el botón cambiará a Editar usuario. Al 
// pulsar el botón se cambiarán los datos del usuario en el localStorage. Los cambios 
// realizados deben reflejarse en la lista.