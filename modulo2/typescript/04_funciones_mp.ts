function registrarHorasEstudio(semanas: number, horasPorSemana: number) {
  return semanas * horasPorSemana;
}

console.log(registrarHorasEstudio(5, 3));
console.log(registrarHorasEstudio(10, 4));
console.log(registrarHorasEstudio(12, 5));

function calcularNotaFinal(notaListening: number, notaSpeaking: number): number {
  return notaListening + notaSpeaking;
}

console.log(calcularNotaFinal(5, 3));

function calcularIncentivo(puntosExtra: number, multiplicador: number): number {
  return puntosExtra * multiplicador;
}

function saludarEstudiante(nombreEstudiante: string): string {
  return `¡Hola, ${nombreEstudiante}! Bienvenido a tu clase de idiomas.`;
}

function verificarAprobacion(notaMinima: number): boolean {
  return notaMinima % 2 === 0;
}

function notificarEstado(mensajeSistema: string): void {
  console.log(`[INFO IDIOMAS] ${mensajeSistema}`);
}

console.log(calcularIncentivo(4, 7));
console.log(saludarEstudiante("Ana"));
console.log(verificarAprobacion(10));
console.log(verificarAprobacion(7));
notificarEstado("Todo listo para iniciar el ciclo");

function presentarFichaEstudiante(nombreCompleto: string, edadEstudiante?: number, idiomaAsignado?: string): string {
  let resultadoFicha = `Estudiante: ${nombreCompleto}`;

  if (edadEstudiante !== undefined) {
    resultadoFicha += ` | Edad: ${edadEstudiante} años`;
  }

  if (idiomaAsignado !== undefined) {
    resultadoFicha += ` | Idioma inscrito: ${idiomaAsignado}`;
  }

  resultadoFicha += ".";
  return resultadoFicha;
}

console.log(presentarFichaEstudiante("Ana"));
console.log(presentarFichaEstudiante("Ana", 28));
console.log(presentarFichaEstudiante("Ana", 28, "Alemán"));

function buscarCursoIdioma(
  cursosDisponibles: string[],
  criterioBusqueda: string,
  coincidenciaExacta?: boolean
): string | null {
  for (const curso of cursosDisponibles) {
    if (coincidenciaExacta) {
      if (curso === criterioBusqueda) return curso;
    } else {
      if (curso.toLowerCase().includes(criterioBusqueda.toLowerCase())) {
        return curso;
      }
    }
  }
  return null;
}

const listadoDeCursos = ["Inglés B2", "Francés A1", "Italiano B1", "Japonés Inicial"];

console.log(buscarCursoIdioma(listadoDeCursos, "francés"));
console.log(buscarCursoIdioma(listadoDeCursos, "francés", true));
console.log(buscarCursoIdioma(listadoDeCursos, "Francés A1", true));
console.log(buscarCursoIdioma(listadoDeCursos, "Ruso"));

function calcularCostoTotal(
  tarifaBase: number,
  descuentoNivel: number = 10,
  incluirLibros: boolean = true
): number {
  let costoFinal = tarifaBase * (1 - descuentoNivel / 100);

  if (incluirLibros) {
    costoFinal *= 1.21;
  }

  return costoFinal;
}

const costoBaseMatricula = 100;
console.log(calcularCostoTotal(costoBaseMatricula));
console.log(calcularCostoTotal(costoBaseMatricula, 20));
console.log(calcularCostoTotal(costoBaseMatricula, 20, false));

function alertarInicioClase(idiomaClase: string, repeticiones: number = 3): void {
  for (let i = 1; i <= repeticiones; i++) {
    console.log(`[Aviso ${i}/${repeticiones}] La clase de ${idiomaClase} está por comenzar`);
  }
}

alertarInicioClase("Inglés");
alertarInicioClase("Portugués", 5);

function generarReporteNotas(...notasExamenes: number[]): {
  notaMinima: number;
  notaMaxima: number;
  sumaNotas: number;
  promedioNotas: number;
} {
  if (notasExamenes.length === 0) {
    return { notaMinima: 0, notaMaxima: 0, sumaNotas: 0, promedioNotas: 0 };
  }

  let notaMinima = notasExamenes[0];
  let notaMaxima = notasExamenes[0];
  let sumaNotas = 0;

  for (const n of notasExamenes) {
    if (n < notaMinima) notaMinima = n;
    if (n > notaMaxima) notaMaxima = n;
    sumaNotas += n;
  }

  return {
    notaMinima,
    notaMaxima,
    sumaNotas,
    promedioNotas: sumaNotas / notasExamenes.length
  };
}

console.log(generarReporteNotas(8, 9, 7, 10, 6));

export {};