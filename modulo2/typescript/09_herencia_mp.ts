class MiembroAcademia {
  protected nombreMiembro: string;
  protected identificador: number;

  constructor(nombre: string, id: number) {
    this.nombreMiembro = nombre;
    this.identificador = id;
  }

  ingresarClase(): void {
    console.log(`  ${this.nombreMiembro} ha ingresado a la clase.`);
  }

  cerrarSesion(): void {
    console.log(`  ${this.nombreMiembro} ha cerrado su sesión.`);
  }

  toString(): string {
    return `${this.nombreMiembro} (ID: ${this.identificador})`;
  }
}

class EstudianteFicha extends MiembroAcademia {
  private nivelAsignado: string;

  constructor(nombre: string, id: number, nivel: string) {
    super(nombre, id);
    this.nivelAsignado = nivel;
  }

  realizarEvaluacion(): void {
    console.log(`  ${this.nombreMiembro}: Iniciando examen de nivel.`);
  }

  toString(): string {
    return `${super.toString()} — Nivel: ${this.nivelAsignado}`;
  }
}

class TutorFicha extends MiembroAcademia {
  private esNativo: boolean;

  constructor(nombre: string, id: number, esNativo: boolean) {
    super(nombre, id);
    this.esNativo = esNativo;
  }

  impartirTutoria(): void {
    console.log(`  ${this.nombreMiembro}: Iniciando club de conversación.`);
  }

  toString(): string {
    return `${super.toString()} — ${this.esNativo ? "Profesor Nativo" : "Profesor Certificado"}`;
  }
}

console.log("=== HERENCIA EN ACADEMIA ===\n");

const alumnoInstancia = new EstudianteFicha("Rex", 3, "Labrador");
const profesorInstancia = new TutorFicha("Misi", 5, false);

profesorInstancia.ingresarClase();
alumnoInstancia.cerrarSesion();

profesorInstancia.impartirTutoria();

console.log(`\nRex:  ${alumnoInstancia.toString()}`);
console.log(`Misi: ${profesorInstancia.toString()}`);

console.log(`\n¿Rex es Estudiante?  ${alumnoInstancia instanceof EstudianteFicha}`);
console.log(`¿Rex es Miembro?     ${alumnoInstancia instanceof MiembroAcademia}`);
console.log(`¿Rex es Tutor?       ${alumnoInstancia instanceof TutorFicha}`);

export {};