// 1. Configuración Inicial
// - Instala TypeScript globalmente y crea un proyecto con el archivo
//   tsconfig.json .
// - Escribe tu primer archivo hola.ts que haga lo siguiente:
//   - Declare una función saludar que reciba un nombre y retorne un 
//     saludo.
//   - Llame a la función con un nombre y muestra el resultado en 
//     consola.
// - Compila y ejecuta el archivo utilizando tsc y node .

function saludar(nombre:string):string{
    return 'Hola, ' + nombre;
}

console.log(saludar('Daniel'));