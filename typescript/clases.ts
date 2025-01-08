// 5. Clases
// - Crea una clase Coche con las siguientes propiedades y 
//    métodos:
//    - Propiedades: marca , modelo , año (todas públicas).
//    - Constructor para inicializar estas propiedades.
//    - Método detalles que muestre las propiedades en consola.
class Coche {
    // Propiedades
    marca:string;
    modelo:string;
    anyo:number;

    // Constructor
    constructor(marca:string, modelo:string, anyo:number){
        this.marca = marca;
        this.modelo = modelo;
        this.anyo = anyo;
    }

    // Métodos
    detalles():void{
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo},
            Año: ${this.anyo}`);
    }
} 

// - Añade una clase Deportivo que extienda de Coche y tenga
//   una propiedad adicional velocidadMaxima .
//    - Sobrescribe el método detalles para incluir velocidadMaxima .