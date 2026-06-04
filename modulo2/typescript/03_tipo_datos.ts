// tipos-string.ts
const nombreS:    string = "Ana García";
const saludo:    string = `Hola, ${nombreS}`;
const vacia:     string = "";
const comillas:  string = 'También con comillas simples';

console.log(nombreS);
console.log(saludo);
console.log(`La cadena vacía tiene longitud: ${vacia.length}`);

// Métodos de string funcionan igual que en JS
console.log(nombreS.toUpperCase());      // ANA GARCÍA
console.log(nombreS.toLowerCase());      // ana garcía
console.log(nombreS.includes("García")); // true
console.log(nombreS.split(" "));         // ["Ana", "García"]

// tipos-number.ts
const entero:     number = 42;
const decimal:    number = 3.14;
const negativo:   number = -100;
const grande:     number = 1_000_000;  // el _ es solo visual, no cambia el valor
const resultado:  number = 10 / 3;

console.log(entero);
console.log(decimal);
console.log(grande);
console.log(resultado);                   // 3.3333...
console.log(resultado.toFixed(2));        // "3.33"

// Operaciones
console.log(10 + 3);   // 13
console.log(10 - 3);   // 7
console.log(10 * 3);   // 30
console.log(10 / 3);   // 3.333...
console.log(10 % 3);   // 1  (resto de la división)
console.log(2 ** 10);  // 1024  (potencia)

// tipos-boolean.ts
const mayorDeEdad:  boolean = true;
const tieneCuenta:  boolean = false;

console.log(mayorDeEdad);
console.log(!mayorDeEdad);              // false  (negación)
console.log(mayorDeEdad && tieneCuenta); // false  (ambos deben ser true)
console.log(mayorDeEdad || tieneCuenta); // true   (al menos uno es true)

// Los booleanos suelen venir de comparaciones
const edad = 20;
const esAdulto: boolean = edad >= 18;
console.log(`¿Es adulto? ${esAdulto}`); // ¿Es adulto? true

// null-undefined.ts

// En JS esto no da error, en TS sí (modo estricto)
// let nombre: string = null;    // ❌ Error

// Para permitir null hay que declararlo explícitamente
let nombre: string | null = null;   // ✅ puede ser string o null

nombre = "Ana";
console.log(nombre);  // "Ana"
nombre = null;
console.log(nombre);  // null

// undefined — variable declarada pero sin valor
let ciudad: string | undefined;
console.log(ciudad);  // undefined

ciudad = "Madrid";
console.log(ciudad);  // "Madrid"

// tipo-unknown.ts

function procesarDato(valor: unknown): string {
  // No puedo usar valor directamente — debo verificar primero

  if (typeof valor === "string") {
    // Aquí TypeScript sabe que es string
    return valor.toUpperCase();
  }

  if (typeof valor === "number") {
    // Aquí TypeScript sabe que es number
    return valor.toFixed(2);
  }

  if (typeof valor === "boolean") {
    return valor ? "Sí" : "No";
  }

  return "Tipo no reconocido";
}

console.log(procesarDato("hola"));   // HOLA
console.log(procesarDato(3.14159));  // 3.14
console.log(procesarDato(true));     // Sí
console.log(procesarDato(null));     // Tipo no reconocido