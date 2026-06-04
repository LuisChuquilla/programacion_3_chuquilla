abstract class CalculoGarantia {
  protected componenteFalla: string;

  constructor(componente: string) {
    this.componenteFalla = componente;
  }

  abstract calcularCostoReparacion(): number;
  abstract calcularPorcentajeDepreciacion(): number;

  describirOrden(): string {
    return `${this.constructor.name} [Falla en: ${this.componenteFalla}]: ` +
           `Costo de Servicio=$${this.calcularCostoReparacion().toFixed(2)}, Tasa de Penalización por Desgaste=${this.calcularPorcentajeDepreciacion().toFixed(2)}%`;
  }
}

class GarantiaPantalla extends CalculoGarantia {
  private pulgadasDanadas: number;

  constructor(componente: string, pulgadas: number) {
    super(componente);
    this.pulgadasDanadas = pulgadas;
  }

  calcularCostoReparacion(): number { return this.pulgadasDanadas * 40; }
  calcularPorcentajeDepreciacion(): number { return (this.calcularCostoReparacion() / 100) * 100; }
}

class GarantiaPlacaBase extends CalculoGarantia {
  private condensadoresQuemados: number;
  private modulosRamAfectados: number;

  constructor(componente: string, condensadores: number, ram: number) {
    super(componente);
    this.condensadoresQuemados = condensadores;
    this.modulosRamAfectados = ram;
  }

  calcularCostoReparacion(): number { return this.condensadoresQuemados + this.modulosRamAfectados; }
  calcularPorcentajeDepreciacion(): number { return (this.calcularCostoReparacion() / 50) * 100; }
}

class GarantiaBateria extends CalculoGarantia {
  private celdasDegradadas: number;
  private ciclosCarga: number;
  private amperajeFuga: number;

  constructor(componente: string, celdas: number, ciclos: number, amperaje: number) {
    super(componente);
    this.celdasDegradadas = celdas;
    this.ciclosCarga = ciclos;
    this.amperajeFuga = amperaje;
  }

  calcularPorcentajeDepreciacion(): number { return ((this.celdasDegradadas + this.ciclosCarga + this.amperajeFuga) / 30) * 100; }
  calcularCostoReparacion(): number {
    const factorDesgaste = this.celdasDegradadas + this.ciclosCarga + this.amperajeFuga;
    return Math.sqrt(factorDesgaste * (factorDesgaste - this.celdasDegradadas) * (factorDesgaste - this.ciclosCarga) * (factorDesgaste - this.amperajeFuga));
  }
}

console.log("=== POLIMORFISMO EN ÓRDENES DE SERVICIO TÉCNICO ===\n");

const garantiasDelDia: CalculoGarantia[] = [
  new GarantiaPantalla("Display OLED Quemado", 5),
  new GarantiaPlacaBase("Microprocesador Cortocircuitado", 4, 6),
  new GarantiaBateria("Batería Inflada", 3, 4, 5),
  new GarantiaPantalla("Vidrio Frontal Astillado", 3),
];

for (const reclamo of garantiasDelDia) {
  console.log(`  ${reclamo.describirHeader o reclamo.describir()}`);
}

const costoTotalReparaciones = garantiasDelDia.reduce((acc, g) => acc + g.calcularCostoReparacion(), 0);
console.log(`\n  Costo total neto de servicio técnico acumulado: $${costoTotalReparaciones.toFixed(2)}`);

export {};