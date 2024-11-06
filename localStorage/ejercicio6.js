// Ejercicio 6: Lista de Usuarios con Opciones de Borrar y Editar

// a) Utiliza JavaScript para capturar los valores del formulario y agregar un nuevo 
// usuario a una lista visible en la página. Cada usuario en la lista debe incluir 
// un botón "Borrar" al lado de su nombre, dirección y dirección de correo electrónico.
const ul = document.getElementById('userList');
const users = JSON.parse(localStorage.getItem('users')) || []; // Lgante
localStorage.setItem('users', JSON.stringify(users));

let nombreField = document.getElementById('name');
let direccionField = document.getElementById('address');
let emailField = document.getElementById('email');


function addUser(){
    const nombre = nombreField.value;
    const direccion = direccionField.value;
    const email = emailField.value;
    const btnDelete = document.createElement('button');
    const btnUpdate = document.createElement('button');

    btnDelete.appendChild(document.createTextNode('Borrar'));
    btnUpdate.appendChild(document.createTextNode('Editar'));
    
    btnDelete.addEventListener("click", function() {
        btnDelete.parentElement.remove();
    });
    btnUpdate.addEventListener("click", editUser);

    // if(editFormButton.textContent === 'Editar usuario'){
    //     const editUser = users.find(user => user.name = nombre);
    //     editUser.name = nombre;
    //     editUser.address = direccion;
    //     editUser.email = email; 

    //     const elements = Array.from(ul.children);
    //     const userLi = elements.find(element => element.contains(nombre));
    // }

    const usuario = nombre + " | " + direccion + " | " + email + " | ";

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(usuario));
    li.appendChild(btnDelete);
    li.appendChild(btnUpdate);
    ul.appendChild(li);

    users.push({nombre, direccion, email});
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
    localStorage.setItem('users', JSON.stringify(users));
}

document.getElementById('local').addEventListener('click', function(e) {
    e.preventDefault();
    guardarLocal();
})

console.log(JSON.parse(localStorage.getItem('users')));

function rellenarLista(){
    const listaJSON = JSON.parse(localStorage.getItem('users'))

    listaJSON.forEach(element => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(JSON.stringify(element)));
        ul.appendChild(li);
    });
    console.log(listaJSON);
}

rellenarLista();

// Ampliación:

// d) Ahora vamos a permitir que se puedan editar los usuarios, para ello, cuando se 
// añada un usuario a la lista, además del botón borrar, tendrá también un botón editar. 
// Cuando se haga clic en el botón "Editar" junto a un usuario, se cargarán los datos 
// del usuario en los campos del formulario y el botón cambiará a Editar usuario. Al 
// pulsar el botón se cambiarán los datos del usuario en el localStorage. Los cambios 
// realizados deben reflejarse en la lista.
function editUser(event){
    const textUser = event.target.parentElement.textContent;
    const splitUser = textUser.split(" | ");
    const name = splitUser[0].trim();
    const address = splitUser[1].trim();
    const email = splitUser[2].trim();
    nombreField.value = name;
    direccionField.value = address;
    emailField.value = email;
}