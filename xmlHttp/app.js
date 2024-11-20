const bodyBarcos = document.getElementById('bodyBarcos');
let barcos = '';

const peticion = new XMLHttpRequest();
peticion.open('GET', 'http://localhost:3000/barcos');
peticion.send();
console.log(peticion.status);

peticion.addEventListener('load', function(){
    if(peticion.status === 200) {
        barcos = JSON.parse(peticion.responseText);
        
        barcos.forEach(barco => {
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');
            const td5 = document.createElement('td');
            const td6 = document.createElement('td');

            td1.appendChild(document.createTextNode(barco.id));
            td2.appendChild(document.createTextNode(barco.nombre));
            td3.appendChild(document.createTextNode(barco.capacidad));
            td4.appendChild(document.createTextNode(barco.tipo));
            td5.appendChild(document.createTextNode(barco.capitan));
            td6.appendChild(document.createTextNode(barco.armamento));

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);

            bodyBarcos.appendChild(tr);
        });

    } else {
        alert("Error en la solicitud");
    }
})


// Añadir un barco
const shipForm = document.getElementById('shipForm');
shipForm.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value;
    const capacity = document.getElementById('capacity').value;
    const type = document.getElementById('type').value;
    const captain = document.getElementById('captain').value;

    const newShip = {name, capacity, type, captain};

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/barcos');
    xhr.send();
})




