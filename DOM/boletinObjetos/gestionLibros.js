// Ejercicio 4: Transformación de datos
// Crea un objeto bookStore que represente una tienda de libros. Cada libro tendrá 
// las siguientes propiedades: title, author, price y category (Ficción, No ficción,
// Ciencia, etc.).

// Ejemplo inicial:

let bookStore = {
  books: [
    { title: "1984", author: "George Orwell", price: 15, category: "Fiction" },
    { title: "Sapiens", author: "Yuval Noah Harari", price: 20, category: "Non-fiction" }
  ]
};

// Tareas:

// Crea un método addBook(title, author, price, category) que añada un nuevo libro al array books.
function addBook(title, author, price, category){
    bookStore.books.push({title, author, price, category})
}

addBook("El Hobbit", "JRR Tolkien", 10, "Fiction");
console.log(bookStore.books);

// Crea un método getBooksByCategory(category) que devuelva un array con todos los libros de esa categoría.
function getBooksByCategory(category){
    return bookStore.books.filter(book => book.category === category)
}

console.log(getBooksByCategory("Fantasy"));

// Utiliza reduce() para calcular el precio total de todos los libros.
let totalPrice = bookStore.books.reduce((total, book) => total += book.price, 0)
console.log(totalPrice);

// Utiliza filter() para devolver solo los libros cuyo precio sea mayor de 18.
let expensiveBooks = bookStore.books.filter(book => book.price > 18);
console.log(expensiveBooks);

// Utiliza sort() para ordenar los libros por precio, de mayor a menor.
let orderedBooks = bookStore.books.sort((b1, b2) => b1.price - b2.price);
console.log(orderedBooks);

// Descripción: Extiende el sistema de la tienda de libros para que sea interactivo 
// desde el navegador. Los libros deben mostrarse en una tabla y se debe poder 
// agregar, eliminar y filtrar libros mediante la interfaz gráfica.

// Tareas:

// Mostrar libros: Al cargar la página, muestra una tabla con los libros disponibles,
//  incluyendo su título, autor, precio y categoría.
function createTable(){
    const table = document.createElement('table');
    const row1 = document.createElement('tr');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    const th3 = document.createElement('th');
    const th4 = document.createElement('th');

    th1.appendChild(document.createTextNode('Título'));
    th2.appendChild(document.createTextNode('Autor'));
    th3.appendChild(document.createTextNode('Precio'));
    th4.appendChild(document.createTextNode('Categoría'));

    row1.appendChild(th1);
    row1.appendChild(th2);
    row1.appendChild(th3);
    row1.appendChild(th4);

    table.appendChild(row1);

    bookStore.books.forEach((book) => {
        const row2 = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');
        const cell4 = document.createElement('td');

        cell1.appendChild(document.createTextNode(book.title));
        cell2.appendChild(document.createTextNode(book.author));
        cell3.appendChild(document.createTextNode(book.price));
        cell4.appendChild(document.createTextNode(book.category));

        row2.appendChild(cell1);
        row2.appendChild(cell2);
        row2.appendChild(cell3);
        row2.appendChild(cell4);

        table.appendChild(row2);
    })

    table.classList.add('tabla');

    document.querySelector('.container').appendChild(table);
}

createTable();

function updateTable(){
    const tabla = document.querySelector('.tabla');
    tabla.remove();
    createTable();
}


// Añadir libros: Añade un formulario para que el usuario pueda añadir nuevos libros 
// a la tienda. Al enviar el formulario, el libro debe añadirse tanto al objeto 
// bookStore como a la tabla.
const addForm = document.getElementById('add');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const inputPrice = document.getElementById('price');
const inputCategory = document.getElementById('category');

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    inputTitle.value != null && inputAuthor.value != null && inputPrice.value != null && inputCategory.value != null &&
    addBook(inputTitle.value, inputAuthor.value, inputPrice.value, inputCategory.value);
    updateTable();
})

// Filtrar por categoría: Añade un campo de selección que permita filtrar los libros 
// por categoría. Al seleccionar una categoría, solo los libros de esa categoría 
// deben aparecer en la tabla.
let categories = [];
bookStore.books.forEach(book => {
    !categories.includes(book.category) && categories.push(book.category);
})

const select = document.getElementById('select');
categories.forEach(category => {
    const option = document.createElement('option');
    option.setAttribute('value', category);
    option.appendChild(document.createTextNode(category));

    select.appendChild(option);
})

const filter = document.getElementById('filter');
filter.addEventListener('click', function(e){
    console.log(e.target.value);
})

// Ordenar por precio: Añade botones para ordenar los libros en la tabla de mayor a 
// menor precio y viceversa.