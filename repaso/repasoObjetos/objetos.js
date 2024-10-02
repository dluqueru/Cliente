// A. Crea un objeto que tenga tus nombre, apellido y ocupación como claves.
let obj = {
    nombre: "Daniel",
    apellido: "Luque",
    ocupacion: "Estudiante"
}

// B. Accede a cada valor de tu objeto utilizando tanto la notación de punto 
// como la notación de corchetes.
console.log(obj.nombre);
console.log(obj["apellido"]);
console.log(obj.ocupacion);

// C. Agrega una clave para pasatiempo a tu objeto. Elimina la clave y el valor de ocupación.
obj.pasatiempo = "Música";
delete obj.ocupacion;
obj.apellido = null;
console.log(obj);

for(let key in obj){
    console.log(obj[key]);
}

// 1. Dado el siguiente objeto a continuación, escribe código para imprimir el valor y 
// luego la clave en la consola separados por '=>' :
let namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

for(let key in namesAndHobbies){
    console.log(namesAndHobbies[key] + " => " + key);
}

// 2. Agrega una clave con tu nombre y un valor con tu pasatiempo favorito al objeto 
// namesAndHobbies.
namesAndHobbies.daniel = "climbing";

// 3. Escribe una declaración if que imprima tu nombre y pasatiempo en la consola si 
// la clave de tu nombre está contenida en el objeto.
if("daniel" in namesAndHobbies){
    console.log("daniel" + " => " + namesAndHobbies["daniel"]);
}

// 4. Para cada uno de los ejercicios a continuación, asume que estás comenzando con 
// el siguiente objeto programming
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://www.devtopics.com/best-programming-jokes/"
  };

// 4.1 Escribe el comando para agregar el lenguaje "Go" al final del arreglo de lenguajes.
programming.languages.push("Go");
console.log(programming.languages);

// 4.2 Cambia la dificultad al valor de 7.
