// Crear un array — corchetes []
const frutas1   = ["manzana", "banana", "cereza"];
const numeros  = [1, 2, 3, 4, 5];
const mixto    = [1, "dos", true, null];          // válido pero poco recomendable
const vacio    = [];

// Acceso por índice — empieza en 0
console.log(frutas1[0]);   // "manzana"
console.log(frutas1[2]);   // "cereza"
console.log(frutas1[9]);   // undefined — no lanza error

// Índice negativo — NO funciona en JS (devuelve undefined)
console.log(frutas1[-1]);  // undefined ← en Python sí funciona, en JS no

// at() — acceso con índice negativo (ES2022)
console.log(frutas1.at(-1));   // "cereza"  ← el último elemento
console.log(frutas1.at(-2));   // "banana"

// Longitud
console.log(frutas1.length);   // 3

// Modificar un elemento
frutas1[1] = "mango";
console.log(frutas1);   // ["manzana", "mango", "cereza"]

const arr = [1, 2, 3];

// push — añade al final, devuelve la nueva longitud
arr.push(4);
arr.push(5, 6);           // se pueden añadir varios a la vez
console.log(arr);          // [1, 2, 3, 4, 5, 6]

// pop — elimina el último, devuelve el elemento eliminado
const ultimo = arr.pop();
console.log(ultimo);       // 6
console.log(arr);          // [1, 2, 3, 4, 5]

// unshift — añade al inicio (más lento que push)
arr.unshift(0);
console.log(arr);          // [0, 1, 2, 3, 4, 5]

// shift — elimina el primero, devuelve el elemento eliminado
const primero = arr.shift();
console.log(primero);      // 0
console.log(arr);          // [1, 2, 3, 4, 5]

// splice — elimina, reemplaza o inserta en cualquier posición
// splice(inicio, cuántos_eliminar, ...elementos_a_insertar)
const meses = ["ene", "feb", "abr", "may"];
meses.splice(2, 0, "mar");          // inserta "mar" en posición 2, elimina 0
console.log(meses);                  // ["ene", "feb", "mar", "abr", "may"]

const eliminados = meses.splice(1, 2);  // elimina 2 desde posición 1
console.log(eliminados);             // ["feb", "mar"]
console.log(meses);                  // ["ene", "abr", "may"]

//BUSQUEDA

const numerosBusqueda = [10, 20, 30, 20, 40];

// indexOf — primera posición del valor, -1 si no existe
console.log(numerosBusqueda.indexOf(20));    // 1
console.log(numerosBusqueda.indexOf(99));    // -1

// lastIndexOf — última posición del valor
console.log(numerosBusqueda.lastIndexOf(20));  // 3

// includes — ¿existe el valor? devuelve boolean
console.log(numerosBusqueda.includes(30));   // true
console.log(numerosBusqueda.includes(99));   // false


const frutas = ["manzana", "banana", "cereza"];

// forEach no devuelve nada (undefined)
frutas.forEach((fruta, indice) => {
  console.log(`${indice}: ${fruta}`);
});
// 0: manzana
// 1: banana
// 2: cereza

// Equivalente con for...of (más legible en casos simples)
for (const fruta of frutas) {
  console.log(fruta);
}

const celsius = [0, 15, -5, 22, 37, 100, -10, 28];

const fahrenheit = celsius.map(c => (c * 9/5) + 32);
console.log(fahrenheit);

const filtro = celsius.filter(c => c >= 0 && c <= 30);
console.log(filtro);

cons