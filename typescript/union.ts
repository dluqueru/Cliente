// 3. Tipos Avanzados
// - Crea un archivo union.ts y define una variable id que pueda 
//   ser un número o una cadena. Asigna y muestra ambos tipos de
//   valores en consola.
let id:number|string; 

id = 1;
console.log(typeof id);

// - Crea una interface llamada Producto con las siguientes 
//   propiedades:
//     nombre : string
//     precio : number
//     disponible : boolean
interface Producto{
    nombre:string,
    precio:number,
    disponible:boolean
}

// - Usa la interfaz para crear un objeto producto e inicialízalo
//   con valores. Muestra las propiedades en consola
let producto:Producto = {
    nombre: 'Móvil', 
    precio: 500, 
    disponible: true
}

console.log(producto);