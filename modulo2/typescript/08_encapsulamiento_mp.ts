class ProfesorIdioma {
  private _nombreProfesor: string;
  private _tarifaHora: number;
  private _correoProfesor: string;

  constructor(nombre: string, tarifa: number, correo: string) {
    this._nombreProfesor = nombre;
    this._tarifaHora = tarifa;
    this._correoProfesor = correo;
  }

  get nombreProfesorS(): string { return this._nombreProfesor; }
  get tarifaHoraS(): number { return this._tarifaHora; }
  get correoProfesorS(): string { return this._correoProfesor; }

  set nombreProfesorS(valor: string) {
    if (valor.trim().length < 2) {
      throw new Error("El nombre debe tener al menos 2 caracteres.");
    }
    this._nombreProfesor = valor.trim();
  }

  set tarifaHoraS(valor: number) {
    if (valor < 0) {
      throw new Error("La tarifa no puede ser negativa.");
    }
    this._tarifaHora = valor;
  }

  set correoProfesorS(valor: string) {
    if (!valor.includes("@")) {
      throw new Error("El email no es válido.");
    }
    this._correoProfesor = valor.toLowerCase();
  }

  toString(): string {
    return `${this._nombreProfesor} — ${this._tarifaHora}€ — ${this._correoProfesor}`;
  }
}

console.log("=== ENCAPSULAMIENTO DE ACADEMIA ===\n");
const tutorAsignado = new ProfesorIdioma("Ana García", 2500, "Ana@Empresa.COM");
console.log(tutorAsignado.toString());

tutorAsignado.tarifaHoraS = 3000;
tutorAsignado.correoProfesorS = "ana@empresa.com";
console.log(`Nueva tarifa: ${tutorAsignado.tarifaHoraS}€`);

try {
  tutorAsignado.tarifaHoraS = -500;
} catch (e) {
  console.log(`Error al cambiar tarifa: ${(e as Error).message}`);
}

try {
  tutorAsignado.correoProfesorS = "emailsinrobadillo";
} catch (e) {
  console.log(`Error al cambiar email: ${(e as Error).message}`);
}

export {};