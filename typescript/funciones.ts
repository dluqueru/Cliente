// 4. Funciones
// - Define una función multiplicar que reciba dos números y 
//   retorne su producto.
function multiplicar(num1:number, num2:number):number{
    return num1 * num2
}
console.log(multiplicar(2, 6));


// - Crea una función saludar con un parámetro opcional apellido.
//   Si el apellido no se proporciona, retorna solo el nombre.
function saludear(nombre:string, apellido?:string):string{
    if(apellido){
        return `Hola ${nombre} ${apellido}`
    } else {
        return `Hola ${nombre}`
    }
}
console.log(saludear('Daniel'));
console.log(saludear('Daniel', 'Luque'));


// - Define una función flecha calcularIVA que reciba un precio y 
//   retorne el precio con un IVA del 21%. Llámala con varios 
//   valores y muestra los resultados.
let calcularIVA = (precio:number):number => {
    return precio * 0.21 + precio
};

console.log(calcularIVA(100));
console.log(calcularIVA(50));