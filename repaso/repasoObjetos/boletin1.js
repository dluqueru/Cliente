console.log("------ EJERCICIO 1 ------");
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
    console.log(item);
});

console.log(inventory);


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
let arrayStudent9 = gradebook.students.filter(student => 
    student.grades.some(grade => 
        grade == 9)).map(student => 
        student.name);

console.log(arrayStudent9);

// Ordenar los estudiantes en función de sus promedios, de mayor a menor.
let orderedStudents = gradebook.students.sort((st1, st2) => st1.average - st2.average);

console.log(orderedStudents);


console.log("------ EJERCICIO 3 ------");
/* EJERCICIO 3: Generador de acrónimos
Escribe una función que tome un array de objetos, donde cada objeto representa una frase, 
y genere un acrónimo para cada frase. El acrónimo debe formarse tomando la primera letra 
de cada palabra de la frase y convirtiéndola a mayúscula.
Ejemplo:
*/
let phrases = [
  { phrase: "Hyper Text Markup Language" },
  { phrase: "Cascading Style Sheets" },
  { phrase: "Object Oriented Programming" }
];

// Crea una función que genere el acrónimo para cada frase y lo añada como una nueva 
// propiedad acronym en cada objeto.
function addAcronym(){
    phrases.forEach(phrase => {
        phrase.acronym = phrase.phrase.split(" ")
                                      .map(word => word[0].toLocaleUpperCase())
                                      .join("")
        }
    )
}

addAcronym();
console.log(phrases);

// Utiliza map() para devolver un array de objetos con los acrónimos ya generados.
let phrases2 = 
                phrases.map((phrase) => {
                    newPhrase = {};
                    newPhrase.phrase = phrase.phrase;
                    newPhrase.acronym = phrase.phrase.split(" ")
                                                    .map(word => word[0].toLocaleLowerCase())
                                                    .join("");
                    
                    return newPhrase;
                    });

console.log(phrases2);

// Filtra las frases que contengan más de tres palabras y devuelve solo esas frases 
// con su acrónimo.
console.log(phrases.filter((phrase => phrase.acronym.length > 3)));


console.log("------ EJERCICIO 4 ------");
/* EJERCICIO 4: Transformación de datos
Crea un objeto bookStore que represente una tienda de libros. Cada libro tendrá las 
siguientes propiedades: title, author, price y category (Ficción, No ficción, 
Ciencia, etc.).
Ejemplo inicial:
*/
let bookStore = {
  books: [
    { title: "1984", author: "George Orwell", price: 15, category: "Fiction" },
    { title: "Sapiens", author: "Yuval Noah Harari", price: 20, category: "Non-fiction" }
  ]
};

// Crea un método addBook(title, author, price, category) que añada un nuevo libro 
// al array books.
function addBook(title, author, price, category){
    bookStore.books.push({
        title, author, price, category
    })
}

addBook("El Hobbit", "JRR. Tolkien", 18, "Fantasy");
console.log(bookStore);

// Crea un método getBooksByCategory(category) que devuelva un array con todos los 
// libros de esa categoría.
function getBooksByCategory(category){
    return bookStore.books.filter(book => book.category == category)
}

console.log(getBooksByCategory("Fiction"));

// Utiliza reduce() para calcular el precio total de todos los libros.
let totalPrice = bookStore.books.reduce((total, book) =>
    total += book.price, 0);

console.log(totalPrice);

// Utiliza filter() para devolver solo los libros cuyo precio sea mayor de 18.
let expensiveBooks = bookStore.books.filter(book => book.price > 18);

console.log(expensiveBooks);

// Utiliza sort() para ordenar los libros por precio, de mayor a menor. */
let orderedBooks = bookStore.books.sort((b1, b2) => b2.price - b1.price);

console.log(orderedBooks);