// herencia.ts

// Clase padre
class AnimalS {
  constructor(
    protected nombreE: string,
    protected edadD:   number
  ) {}

  // Método heredado por todos los hijos
  comer(): void {
    console.log(`  ${this.nombreE} está comiendo.`);
  }

  dormir(): void {
    console.log(`  ${this.nombreE} está durmiendo.`);
  }

  toString(): string {
    return `${this.nombreE} (${this.edadD} años)`;
  }
}

// Clase hija — hereda de Animal
class PerroS extends AnimalS {
  private razaS: string;

  constructor(nombre: string, edad: number, raza: string) {
    super(nombre, edad);  // ← llama al constructor del padre — OBLIGATORIO
    this.razaS = raza;
  }

  // Método propio — solo existe en Perro
  ladrar(): void {
    console.log(`  ${this.nombreE}: ¡Guau! ¡Guau!`);
  }

  toString(): string {
    return `${super.toString()} — ${this.razaS}`;  // reutiliza el toString del padre
  }
}

class Gato extends AnimalS {
  private esCallejero: boolean;

  constructor(nombre: string, edad: number, esCallejero: boolean) {
    super(nombre, edad);
    this.esCallejero = esCallejero;
  }

  ronronear(): void {
    console.log(`  ${this.nombre}: Prrrrr...`);
  }

  toString(): string {
    return `${super.toString()} — ${this.esCallejero ? "callejero" : "doméstico"}`;
  }
}

console.log("=== HERENCIA ===\n");

const rexS = new PerroS("Rex",  3, "Labrador");
const misiS = new Gato("Misi", 5, false);

// Métodos heredados del padre

misiS.comer();
rexS.dormir();

// Métodos propios de cada hijo

misi.ronronear();

console.log(`\nRex:  ${rex.toString()}`);
console.log(`Misi: ${misi.toString()}`);

// instanceof — comprobar si un objeto pertenece a una clase
console.log(`\n¿Rex es Perro?  ${rex instanceof PerroS}`);   // true
console.log(`¿Rex es Animal? ${rex instanceof AnimalS}`);    // true — hereda
console.log(`¿Rex es Gato?   ${rex instanceof Gato}`);     // false