// Ejercicio 1: Obtener una lista de usuarios
const userList = document.getElementById('userList');
const userSelect = document.getElementById('userSelect');

const xhr = new XMLHttpRequest();
xhr.open('GET', "http://localhost:3000/users");
xhr.send();

xhr.addEventListener('load', function(){
    if(xhr.status === 200){
        let users = JSON.parse(xhr.responseText);
        createUserList(users);
        addOptions(users);
    } else {
        console.log("Error");
    }
})

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

    const xhrAddUser = new XMLHttpRequest();
    xhrAddUser.open('POST', "http://localhost:3000/users");
    xhrAddUser.setRequestHeader('content-type', 'application/json');
    xhrAddUser.send(JSON.stringify(newUser));

    xhrAddUser.addEventListener('load', function(){
        if(xhrAddUser.status === 201){
            alert("Usuario " + newUser.name + " creado");
        } else {
            console.log("Error");
        }
    })
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