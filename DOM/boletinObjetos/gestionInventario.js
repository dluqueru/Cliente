/* EJERCICIO 1: Sistema de gestión de inventario
Crea un sistema de gestión de inventario para una pequeña tienda. Debes definir un objeto 
llamado inventory que contenga las siguientes propiedades:
- items: un array de objetos, donde cada objeto representa un artículo con las claves 
name, quantity y price.
- totalItems: una propiedad que almacene el número total de artículos disponibles. */
let inventory = {
    items: [
        { name: "Laptop", quantity: 5, price: 1200 },
        { name: "Mouse", quantity: 25, price: 20 },
        { name: "Keyboard", quantity: 15, price: 50 }
    ],
    totalItems: 0
    };

// 1. Actualiza la propiedad totalItems automáticamente sumando las cantidades de cada 
// artículo del array items.
/*
function actualizarTotalItems () {
    inventory.totalItems = 0;
    inventory.items.forEach(item => {
        inventory.totalItems += item.quantity;
        }
    )
}
*/
function actualizarTotalItems () {
    inventory.totalItems = inventory.items.reduce((total, item) => 
        total += item.quantity, 0)
}

actualizarTotalItems();
console.log(inventory);

// 2. Crea un método addItem(itemName, quantity, price) que añada un nuevo artículo al 
// inventario o actualice el quantity si el artículo ya existe.
function addItem(itemName, quantity, price) {
    let existingItem = inventory.items.find(item => item.name === itemName);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        inventory.items.push({ name: itemName, quantity: quantity, price: price });
    }
    actualizarTotalItems();
}

addItem("Screen", 100, 45);
addItem("Laptop", 5, 1200);

console.log(inventory.items);
console.log(inventory.totalItems);

// 3. Crea un método removeItem(itemName) que elimine un artículo del inventario 
// basado en su nombre.
function removeItem(itemName){
    let index = inventory.items.findIndex(item => item.name === itemName);
    if(index != -1) {
        inventory.items.splice(index, 1);
    } else {
        console.log("Artículo no encontrado");
    }
    actualizarTotalItems();
}

function removeItem2(itemName){
    inventory.items = inventory.items.filter(item => item.name !== itemName);

    actualizarTotalItems();
}

removeItem("Mouse");
console.log(inventory.items);

// 4. Usa los métodos avanzados de arrays (forEach, map, filter, reduce) para 
// realizar las siguientes tareas:
// - Imprime en consola el nombre de todos los artículos que cuestan más de 50.
/*
function imprimirCaros(){
    inventory.items.forEach(item => {
        if(item.price >= 50){
            console.log(item);
        }
    })
}
*/

function imprimirCaros(){
    console.log(inventory.items.filter(item => item.price > 50));
}

imprimirCaros();

// - Obtén la cantidad total de artículos en stock cuyo nombre contenga la letra "o" 
// (manipulación de cadenas).
function cantArtConO(){
    console.log(inventory.items.reduce((total, item) => 
        item.name.includes("o") ? total + item.quantity: total, 0));
}

cantArtConO();

inventory.items.forEach(item => {
    console.log(Object.values(item));
})

console.log(inventory);

console.log(container);

function creaTabla() {
    // let temp = "";
    // if(JSON.parse(localStorage.getItem('inventario')).length == 0){
    //     temp = inventory.totalItems;
    // } else {
    //     temp = JSON.parse(localStorage.getItem('inventario'));
    // }

    const container = document.getElementById('container');
    const table = document.createElement('table');
    table.classList.add('tabla');

    const row = document.createElement('tr');
    const cell1 = document.createElement('th');
    const cell2 = document.createElement('th');
    const cell3 = document.createElement('th');
    const cell4 = document.createElement('th');

    cell1.appendChild(document.createTextNode('Artículo'));
    cell2.appendChild(document.createTextNode('Precio'));
    cell3.appendChild(document.createTextNode('Cantidad'));
    cell4.appendChild(document.createTextNode('Acción'));

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);

    table.appendChild(row);

    if(JSON.parse(localStorage.getItem('inventario')) != null){
        JSON.parse(localStorage.getItem('inventario')).forEach(item => {
            const row = document.createElement('tr');
            const cell1 = document.createElement('td');
            const cell2 = document.createElement('td');
            const cell3 = document.createElement('td');
            const cell4 = document.createElement('td');
            const btn = document.createElement('button');
    
            btn.appendChild(document.createTextNode('Borrar'));
            btn.classList.add('btn');
    
            btn.setAttribute('data-name', item.name);
            btn.addEventListener("click", function() {
                deleteArticle(item.name);
                actualizaTabla(); // Para refrescar la tabla en cuanto se borra
            });
    
            cell1.appendChild(document.createTextNode(item.name));
            cell2.appendChild(document.createTextNode(item.price));
            cell2.classList.add('price');
            cell3.appendChild(document.createTextNode(item.quantity));
            cell4.appendChild(btn);
    
            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
    
            table.appendChild(row);
        });
    }

    container.appendChild(table);
}

function destacarCaros(){
    const precios = Array.from(document.querySelectorAll('.price'));
    precios.forEach(precio => {
        if(precio.innerHTML > 50){
            precio.parentElement.classList.add('caro')
        };
    })
}

function actualizaTabla(){
    document.querySelector(".tabla").remove();
    creaTabla();
}

function addArticle(name, price, quantity){
    if(name != "" && price != "" && quantity != ""){
        inventory.items.push({ name: name, quantity: quantity, price: price })

        // Cada vez que se añade un artículo vacío el localStorage y lo vuelvo
        // a crear con el artículo nuevo añadido
        localStorage.setItem('inventario', JSON.stringify(inventory.items));
    }
    actualizaTabla();
}

function deleteArticle(name){
    const index = inventory.items.findIndex(item => item.name === name);
    if (index !== -1) {
        inventory.items.splice(index, 1);

        // Actualizo localStorage
        localStorage.setItem('inventario', JSON.stringify(inventory.items));
        
    } else {
        console.log("El artículo no se encuentra en el inventario");
    }
    actualizaTabla();
}

// deleteArticle("Laptop");

const inputName = document.getElementById('name');
const inputPrice = document.getElementById('price');
const inputQuantity = document.getElementById('quantity');

document.addEventListener('submit', function(e){
    e.preventDefault();
    addArticle(inputName.value, inputPrice.value, inputQuantity.value)
    console.log("Nuevo artículo creado con nombre " + inputName.value);
    actualizaTabla();
    destacarCaros();
    // seteo los inputs a null para "limpiarlos"
    inputName.value = null;
    inputPrice.value = null;
    inputQuantity.value = null;
})

creaTabla();
destacarCaros();

console.log(inventory.items);
// Nuevas Tareas con Web Storage:
// 1. Guardar inventario en Local Storage: Cada vez que se añada o elimine 
// un artículo, guarda el inventario actualizado en localStorage. Así, si el 
// usuario recarga la página, el inventario se mostrará como estaba antes.
// DONE modificando funciones addArticle y deleteArticle

// 2. Cargar inventario desde Local Storage: Al cargar la página, revisa si 
// existe un inventario en localStorage. Si es así, usa esos datos para 
// inicializar la tabla de inventario.
console.log(localStorage.getItem('inventario'));


// 3. Botón de reset de inventario: Añade un botón que permita limpiar todo 
// el inventario y también eliminar los datos guardados en localStorage.
function deleteAll(){
    inventory == null;
    localStorage.clear();
}

const botonReset = document.getElementById('reset');

botonReset.addEventListener('click', function(){
    deleteAll();
    actualizaTabla();
});