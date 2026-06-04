// primera-clase.ts

class Persona {
  // Atributos
  nombre: string;
  edad:   number;

  // Constructor — se ejecuta al crear la persona con new
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad   = edad;
  }

  // Métodos
  saludarS(): string {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }

  cumplir(): void {
    this.edad++;
    console.log(`¡Feliz cumpleaños, ${this.nombre}! Ahora tienes ${this.edad}.`);
  }
}

// Crear instancias (objetos) con new
const anaS  = new Persona("Ana García", 28);
const luiss = new Persona("Luis Pérez", 31);

console.log(anaS.saludarS());
console.log(luiss.saludarS());
anaS.cumplir();
console.log(anaS.saludarS());
