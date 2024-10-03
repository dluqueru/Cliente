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


console.log("------ EJERCICIO 2 ------");
/* EJERCICIO 2: Sistema de gestión de notas
Imagina que eres un profesor y quieres llevar un sistema de notas para tus alumnos. 
Crea un objeto gradebook que contenga:

Un array de objetos llamado students, donde cada objeto tiene las siguientes 
propiedades: name, grades (un array de números) y average (promedio de sus notas).
Ejemplo inicial:
*/
let gradebook = {
  students: [
    { name: "Ana", grades: [8, 7, 9], average: 0 },
    { name: "Luis", grades: [6, 8, 6], average: 0 },
    { name: "Maria", grades: [9, 10, 9], average: 0 }
  ]
};

// 1. Crea un método calculateAverage() que calcule el promedio de las notas de cada 
// estudiante y lo almacene en la propiedad average.
function calculateAverage(){
    gradebook.students.forEach(student => 
        student.average = (student.grades.reduce((total, grade) => 
            total += grade, 0)) / student.grades.length); 
}

calculateAverage();
console.log(gradebook);

// 2. Crea un método addStudent(name) que añada un nuevo estudiante con un array vacío 
// de notas.
function addStudent(name){
    let existingStudent = gradebook.students.find((student) => student.name === name);

    if(existingStudent){
        console.log("El estudiante ya existe");
    } else {
        gradebook.students.push({name, grades: [], average: 0});
    }
}

addStudent("Antonia")
console.log(gradebook.students);

// 3. Crea un método addGrade(studentName, grade) que añada una nueva nota al array 
// grades del estudiante especificado.
function addGrade(studentName, grade){
    let studentIndex = gradebook.students.findIndex((student) => student.name === studentName);

    if(studentIndex != -1){
        gradebook.students[studentIndex].grades.push(grade);
        calculateAverage();
    } else {
        console.log("Estudiante no encontrado");
    }
}

addGrade("Antonia", 8);
addGrade("Antonia", 10);

// 4. Utiliza los métodos avanzados de arrays para:
// Imprimir los nombres de los estudiantes cuya nota promedio sea mayor que 8.
console.log(gradebook.students.filter(student => student.average > 8));

// Crear un array con los nombres de todos los estudiantes que tienen al menos una nota 
// mayor que 9.


// Ordenar los estudiantes en función de sus promedios, de mayor a menor.