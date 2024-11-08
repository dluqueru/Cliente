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
        alert("El estudiante ya existe");
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


const container = document.getElementById('container');
  
function createTable(){
    const table = document.createElement('table');
    table.classList.add('tabla');

    const row1 = document.createElement('tr');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    const th3 = document.createElement('th');
    const th4 = document.createElement('th');

    th1.appendChild(document.createTextNode('Nombre'));
    th2.appendChild(document.createTextNode('Notas'));
    th3.appendChild(document.createTextNode('Media'));
    th4.appendChild(document.createTextNode('Añadir notas'));

    row1.appendChild(th1);
    row1.appendChild(th2);
    row1.appendChild(th3);
    row1.appendChild(th4);

    table.appendChild(row1);

    gradebook.students.forEach(student => {
        const row2 = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');
        const cell4 = document.createElement('td');
        const button = document.createElement('button');

        button.classList.add('addGrade');

        cell1.appendChild(document.createTextNode(student.name));
        cell2.appendChild(document.createTextNode(student.grades));
        cell3.appendChild(document.createTextNode(student.average));

        if(student.average > 8){
            cell3.classList.add('excel');
        }

        button.appendChild(document.createTextNode("Añadir nota"));
        button.addEventListener('click', function(){
            gradeForm(cell4);
            cell4.removeChild(button)
        })
        cell4.appendChild(button);

        row2.appendChild(cell1);
        row2.appendChild(cell2);
        row2.appendChild(cell3);
        row2.appendChild(cell4);

        table.appendChild(row2);
    })
    container.appendChild(table);
}

function updateTable(){
    document.querySelector(".tabla").remove();
    createTable();
}

function gradeForm(td){
    const gradeForm = document.createElement('form');
    gradeForm.classList.add('grades');
    const label = document.createElement('label');
    const grade = document.createElement('input');
    const submit = document.createElement('input');
    const br = document.createElement('br');

    label.setAttribute('for', 'grade');
    grade.setAttribute('type', 'number');
    grade.setAttribute('id', 'grade');
    grade.setAttribute('name', 'grade');

    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Añadir');

    gradeForm.appendChild(label);
    gradeForm.appendChild(grade);
    gradeForm.appendChild(br);
    gradeForm.appendChild(submit);

    td.appendChild(gradeForm);
}

const form = document.getElementById('create');
const inputName = document.getElementById('name');

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(inputName.value != ""){
        addStudent(inputName.value);
        updateTable();
    }
})



createTable();
gradeForm();