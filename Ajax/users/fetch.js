function getUsers(){
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => {
        createUserList(users);
        addOptions(users);
    })
    .catch(err => console.error(err));
}

const userList = document.getElementById('userList');
const userSelect = document.getElementById('userSelect');

function createUserList(users){
    users.forEach(user => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(user.name + " | " + user.email));
        userList.appendChild(li);
    });
}

// Ejercicio 2: Añadir un nuevo usuario con JSON
const userForm = document.getElementById('userForm');
userForm.addEventListener('submit', function(e){
    e.preventDefault();

    const newUser = {
        'name': document.getElementById('name').value,
        'email': document.getElementById('email').value
    }

    fetch("http://localhost:3000/users", {
        method:'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(user => {
        alert("Usuario " + user.name + " creado con Id: " + user.id);
        userList.innerHTML = '';
        getUsers();
    })
    .catch(err => console.error(err))
})

// Ejercicio 4: Modificar un usuario existente
function addOptions(users){
    users.forEach(user => {
        const option = document.createElement('option');
        option.setAttribute("id", user.name);
        option.appendChild(document.createTextNode(user.name));
        userSelect.appendChild(option);
    })
}

const updateUserForm = document.getElementById('updateUserForm');
updateUserForm.addEventListener('submit', function(e){
    e.preventDefault();
    const updatedUser = {
        'name': document.getElementById('updateName').value,
        'email': document.getElementsByName('updateEmail').value
    }

    const xhrUpdateUser = new XMLHttpRequest();
    // TODO
    // xhrUpdateUser.open('PUT', )
})

// Para inicializar la lista de usuarios
!userList.hasChildNodes == '' && getUsers();