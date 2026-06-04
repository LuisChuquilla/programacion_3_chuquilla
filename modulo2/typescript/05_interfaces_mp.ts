type EstudianteCurso = {
  nombreCompleto: string;
  edadEstudiante: number;
  correoElectronico: string;
};

function mostrarEstudiante(e: EstudianteCurso): void {
  console.log(`${e.nombreCompleto} (${e.edadEstudiante} años) — ${e.correoElectronico}`);
}

function validarEstudiante(e: EstudianteCurso): boolean {
  return e.nombreCompleto.length > 0 && e.correoElectronico.includes("@");
}

const estudianteRegistrado: EstudianteCurso = {
  nombreCompleto: "Ana García",
  edadEstudiante: 28,
  correoElectronico: "ana@email.com"
};

mostrarEstudiante(estudianteRegistrado);
console.log(`¿Válido? ${validarEstudiante(estudianteRegistrado)}`);

type Denominacion = string;
type CostoMatricula = number;
type EstadoInscripcion = boolean;

type RolPlataforma = "admin" | "tutor" | "estudiante";
type EstadoAsistencia = "presente" | "ausente" | "justificado";
type EvaluacionFinal = number | string | null;

type GrupoIdiomas = string[];
type HistorialCalificaciones = number[];

const idiomaSeleccionado: Denominacion = "Ana";
const tipoUsuario: RolPlataforma = "admin";

const estatusClase: EstadoAsistencia = "presente";
console.log(`${idiomaSeleccionado} — rol: ${tipoUsuario} — estado: ${estatusClase}`);

function verificarPermisoEdicion(rol: RolPlataforma): boolean {
  return rol === "admin" || rol === "tutor";
}

console.log(verificarPermisoEdicion("admin"));
console.log(verificarPermisoEdicion("estudiante"));

interface CursoIdioma {
  idCurso: number;
  nombreIdioma: string;
  precioMensual: number;
  cuposDisponibles: number;
  nivelMcer: string;
}

function mostrarDetallesCurso(c: CursoIdioma): void {
  console.log(`[${c.idCurso}] ${c.nombreIdioma} — ${c.precioMensual}€ (cupos: ${c.cuposDisponibles})`);
}

function comprobarCupos(c: CursoIdioma): boolean {
  return c.cuposDisponibles > 0;
}

const cursoFrances: CursoIdioma = {
  idCurso: 1,
  nombreIdioma: "Francés B1",
  precioMensual: 999,
  cuposDisponibles: 5,
  nivelMcer: "B1"
};

mostrarDetallesCurso(cursoFrances);
console.log(`¿Hay stock? ${comprobarCupos(cursoFrances)}`);

interface PersonalAcademia {
  readonly idEmpleado: number;
  nombreEmpleado: string;
  correoContacto: string;
  areaIdioma: string;
  telefonosContacto?: string;
  honorarios?: number;
}

const tutoraFrances: PersonalAcademia = {
  idEmpleado: 1,
  nombreEmpleado: "Ana García",
  correoContacto: "ana@empresa.com",
  areaIdioma: "Tecnología"
};

const tutorIngles: PersonalAcademia = {
  idEmpleado: 2,
  nombreEmpleado: "Luis Pérez",
  correoContacto: "luis@empresa.com",
  areaIdioma: "Ventas",
  telefonosContacto: "600111222",
  honorarios: 2500
};

console.log(`${estudianteRegistrado.nombreCompleto} — tel: ${tutoraFrances.telefonosContacto ?? "no registrado"}`);
console.log(`${tutorIngles.nombreEmpleado} — tel: ${tutorIngles.telefonosContacto ?? "no registrado"}`);

function mostrarPagoTutor(p: PersonalAcademia): void {
  if (p.honorarios !== undefined) {
    console.log(`${p.nombreEmpleado}: ${p.honorarios}€/mes`);
  } else {
    console.log(`${p.nombreEmpleado}: salario no registrado`);
  }
}

mostrarPagoTutor(tutoraFrances);
mostrarPagoTutor(tutorIngles);

interface LeccionBase {
  tituloLeccion: string;
  duracionMinutos: number;
}

interface LeccionGramatica extends LeccionBase {
  reglaPrincipal: string;
  incluyeEjercicios: boolean;
}

interface LeccionConversacion extends LeccionBase {
  topicoDiscusión: string;
  esConNativo: boolean;
}

const clasePasadoSimple: LeccionGramatica = {
  tituloLeccion: "Rex",
  duracionMinutos: 3,
  reglaPrincipal: "Labrador",
  incluyeEjercicios: true
};

const clubConversacion: LeccionConversacion = {
  tituloLeccion: "Misi",
  duracionMinutos: 5,
  topicoDiscusión: "gris",
  esConNativo: true
};

function proyectarDatosLeccion(l: LeccionBase): void {
  console.log(`${l.tituloLeccion} (${l.duracionMinutos} años)`);
}

proyectarDatosLeccion(clasePasadoSimple);
proyectarDatosLeccion(clubConversacion);

function detallarLeccionGramatica(g: LeccionGramatica): void {
  console.log(`${g.tituloLeccion} — ${g.reglaPrincipal} — vacunado: ${g.incluyeEjercicios}`);
}

detallarLeccionGramatica(clasePasadoSimple);

export {};