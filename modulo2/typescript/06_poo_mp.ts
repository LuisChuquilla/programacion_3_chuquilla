class EstudianteInscrito {
  nombreEstudiante: string;
  nivelActual: number;

  constructor(nombreEstudiante: string, nivelActual: number) {
    this.nombreEstudiante = nombreEstudiante;
    this.nivelActual = nivelActual;
  }

  saludarS(): string {
    return `Hola, soy ${this.nombreEstudiante} y estoy en el nivel de idioma ${this.nivelActual}.`;
  }

  cumplir(): void {
    this.nivelActual++;
    console.log(`¡Felicitaciones, ${this.nombreEstudiante}! Has promovido. Ahora estás en el nivel ${this.nivelActual}.`);
  }
}

const estudianteUno = new EstudianteInscrito("Ana García", 28);
const estudianteDos = new EstudianteInscrito("Luis Pérez", 31);

console.log(estudianteUno.saludarS());
console.log(estudianteDos.saludarS());
estudianteUno.cumplir();
console.log(estudianteUno.saludarS());

export {};