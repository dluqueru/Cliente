// Ejercicio 1: Crear y Manipular Arrays
/* 1. Crea un array llamado listaCompra con los siguientes elementos: 'Peras', 'Manzanas', 
'Kiwis', 'Plátanos', y 'Mandarinas'. */
let listaCompra = ['Peras', 'Manzanas', 'Kiwis', 'Plátanos', 'Mandarinas'];
console.log(listaCompra);

/* 2. Usa el método splice para eliminar las 'Manzanas' de la lista de compra. */
listaCompra.splice(1, 1);
console.log(listaCompra);

/* 3. Usa el método splice para añadir 'Naranjas' y 'Sandía' después de 'Plátanos' 
en la lista de compra. */
listaCompra.splice(3, 0, 'Naranjas', 'Sandía');
console.log(listaCompra);

/* 4. Usa el método splice para reemplazar 'Kiwis' con 'Cerezas' y 'Nísperos' en la 
lista de compra. */
listaCompra.splice(1, 1, 'Cerezas', 'Nísperos');

/* 5. Imprime la lista de compra final por la consola. */
console.log(listaCompra);


// Ejercicio 2: Copiar un Array
/* 1. Crea un array llamado original con algunos elementos. */
let original = ['Coche', 88, true];

/* 2. Crea un nuevo array llamado copia que sea una copia de original utilizando el 
método slice. */
let copia = original.slice();

/* 3. Modifica un elemento en copia y verifica si también se modifica en original. */
copia.shift();

console.log(original);
console.log(copia);


// Ejercicio 3: Ordenar Notas
/* 1. Crea un array llamado notas con las siguientes calificaciones: [4, 8, 3, 10, 5]. */
let notas = [4, 8, 3, 10, 5];

/* 2. Escribe una función que tome el array de notas y lo ordene de menor a mayor. Utiliza
 el método sort. */
function ordenarNotas(notasArr){
    let notasOrdenadas = notasArr.sort((n1, n2) => n1 - n2);

    return notasOrdenadas;
}

 /* 3. Imprime el array de notas ordenado por la consola. */
console.log(ordenarNotas(notas));


// Ejercicio 4: Ordenar un Array de Objetos
/* 1. Crea un array de objetos llamado alumnos donde cada objeto tiene las propiedades nombre 
y edad. Agrega al menos 5 objetos a este array. */
let alumnos = [{
    nombre: "Daniel",
    edad: 29
},{
    nombre: "Alejandra",
    edad: 30
},{
    nombre: "Cristina",
    edad: 31
},{
    nombre: "Francisco",
    edad: 28
},{
    nombre: "Pablo",
    edad: 22
},];

console.log(alumnos);

/* 2. Escribe una función que tome el array de alumnos y lo ordene por edad de menor a mayor 
utilizando el método sort. */
function ordenarAlumnos(alumnos){
    return alumnos.sort((al1, al2) => al1.edad - al2.edad);
}

/* 3. Imprime el array de alumnos ordenado por la consola. */
console.log(ordenarAlumnos(alumnos));


// Ejercicio 5: Otros Métodos de Array
/* 1. Crea dos arrays, array1 y array2, con algunos elementos. */
let array1 = ["moto", "Plátanos", "vaca"];
let array2 = [1, 2, "Plátanos"];

/* 2. Utiliza el método concat para concatenar los dos arrays en uno nuevo llamado 
concatenado. */
let concatenado = array1.concat(array2);
console.log(concatenado);

/* 3. Utiliza el método reverse para invertir el orden de los elementos en concatenado. */
concatenado.reverse();
console.log(concatenado);

/* 4. Utiliza el método indexOf para encontrar la posición del elemento 'Plátanos' en 
concatenado. */
console.log(concatenado.indexOf('Plátanos'));

/* 5. Utiliza el método lastIndexOf para encontrar la última posición del elemento 'Plátanos' 
en concatenado. */
console.log(concatenado.lastIndexOf('Plátanos'));