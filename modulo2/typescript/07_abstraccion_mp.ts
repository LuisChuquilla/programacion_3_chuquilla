class ProgresoEstudiante {
  private puntosAcomulados: number;
  private historialLecciones: string[] = [];

  constructor(estudiante: string, puntosIniciales: number) {
    this.puntosAcomulados = puntosIniciales;
    this.historialLecciones.push(`Progreso iniciado con ${puntosIniciales} puntos`);
    console.log(`Ficha de progreso de ${estudiante} creada.`);
  }

  completarLeccion(puntos: number): void {
    this.puntosAcomulados += puntos;
    this.registrarActividad(`Lección completada: +${puntos} pts`);
    console.log(`  Asignados ${puntos} puntos. Total: ${this.puntosAcomulados} pts`);
  }

  canjearCertificado(puntosRequeridos: number): void {
    if (puntosRequeridos > this.puntosAcomulados) {
      console.log("  Error: Puntos insuficientes para el certificado.");
      return;
    }
    this.puntosAcomulados -= puntosRequeridos;
    this.registrarActividad(`Certificado obtenido: -${puntosRequeridos} pts`);
    console.log(`  Certificado emitido. Puntos restantes: ${this.puntosAcomulados} pts`);
  }

  consultarPuntaje(): number {
    return this.puntosAcomulados;
  }

  verHistorialProgreso(): void {
    console.log("\n  Historial de Aprendizaje:");
    this.historialLecciones.forEach(h => console.log(`    ${h}`));
  }

  private registrarActividad(actividad: string): void {
    this.historialLecciones.push(actividad);
  }
}

console.log("=== SISTEMA DE PROGRESO DE IDIOMAS ===\n");
const progreso = new ProgresoEstudiante("Ana García", 1000);

progreso.completarLeccion(500);
progreso.canjearCertificado(200);
progreso.canjearCertificado(2000);

console.log(`\nPuntaje actual: ${progreso.consultarPuntaje()} pts`);
progreso.verHistorialProgreso();

export {};