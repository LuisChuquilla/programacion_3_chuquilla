const estudianteI: string = "Marco Pérez";
const saludoCurso: string = `Bienvenido al curso, ${estudianteI}`;
const textoVacio: string = "";
const fraseIdioma: string = 'Práctica de comillas simples';

console.log(estudianteI);
console.log(saludoCurso);
console.log(`La cadena vacía tiene longitud: ${textoVacio.length}`);

console.log(estudianteI.toUpperCase());
console.log(estudianteI.toLowerCase());
console.log(estudianteI.includes("Pérez"));
console.log(estudianteI.split(" "));

const cupoMaximo: number = 30;
const notaPromedio: number = 8.75;
const descuentoMatricula: number = -50;
const codigoInterno: number = 2_500_000;
const resultadoHoras: number = 45 / 7;

console.log(cupoMaximo);
console.log(notaPromedio);
console.log(codigoInterno);
console.log(resultadoHoras);
console.log(resultadoHoras.toFixed(2));

console.log(20 + 5);
console.log(20 - 5);
console.log(20 * 5);
console.log(20 / 5);
console.log(20 % 3);
console.log(3 ** 3);

const cursoAprobado: boolean = true;
const pagoPendiente: boolean = false;

console.log(cursoAprobado);
console.log(!cursoAprobado);
console.log(cursoAprobado && pagoPendiente);
console.log(cursoAprobado || pagoPendiente);

const puntajeExamen = 75;
const esAptoNivel: boolean = puntajeExamen >= 70;
console.log(`¿Es apto para el nivel? ${esAptoNivel}`);

let profesorAsignado: string | null = null;

profesorAsignado = "Jean-Pierre";
console.log(profesorAsignado);
profesorAsignado = null;
console.log(profesorAsignado);

let idiomaOpcional: string | undefined;
console.log(idiomaOpcional);

idiomaOpcional = "Alemán";
console.log(idiomaOpcional);

function verificarElementoCurso(info: unknown): string {
  if (typeof info === "string") {
    return info.toUpperCase();
  }

  if (typeof info === "number") {
    return info.toFixed(2);
  }

  if (typeof info === "boolean") {
    return info ? "Sí" : "No";
  }

  return "Tipo no reconocido";
}

console.log(verificarElementoCurso("nivel b1"));
console.log(verificarElementoCurso(9.846));
console.log(verificarElementoCurso(false));
console.log(verificarElementoCurso(null));

export {};