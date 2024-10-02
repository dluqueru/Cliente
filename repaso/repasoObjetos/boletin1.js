/* Ejercicio 1: Sistema de gestión de inventario
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
function actualizarTotalItems () { 
    inventory.totalItems = 0;
    inventory.items.forEach(item => {
        inventory.totalItems += item.quantity;
        }
    )
}

actualizarTotalItems();
console.log(inventory.totalItems);

// 2. Crea un método addItem(itemName, quantity, price) que añada un nuevo artículo al 
// inventario o actualice el quantity si el artículo ya existe.
function addItem(itemName, quantity, price){
    if(itemName in inventory.items){
        inventory.totalItems += quantity;
    } else {
        inventory.items.push({ name: itemName, quantity: quantity, price: price });
    }
}

addItem("Screen", 100, 1000);
addItem("Laptop", 5, 1200);

actualizarTotalItems();
console.log(inventory.items);
console.log(inventory.totalItems);

// 3. Crea un método removeItem(itemName) que elimine un artículo del inventario 
// basado en su nombre.
function removeItem(itemName){
    if(itemName in inventory.items.values){
        delete inventory.items.itemName;
    }
}

removeItem("Mouse");
console.log(inventory.items[0]);