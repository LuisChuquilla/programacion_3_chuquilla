const horaActual = 14; 

if (horaActual < 12) {
  console.log("SmartZone: Buenos días. Turno de soporte matutino activo.");
} else {
  console.log("SmartZone: Buenas tardes. Turno de soporte vespertino activo.");
}
// Buenas tardes. Turno de soporte vespertino activo.

const ingresoMensual = 800;
const deudaActual = 200;
const INGRESO_MINIMO = 600;
const RATIO_DEUDA_MAXIMO = 0.4; 

const ratioDeuda = deudaActual / ingresoMensual;

if (ingresoMensual >= INGRESO_MINIMO && ratioDeuda <= RATIO_DEUDA_MAXIMO) {
  console.log("Crédito de financiamiento SmartZone: APROBADO.");
  console.log(`Ratio deuda/ingreso: ${(ratioDeuda * 100).toFixed(1)}%`);
} else {
  console.log("Crédito de financiamiento SmartZone: DENEGADO.");
  console.log(`Ingreso mínimo requerido: $${INGRESO_MINIMO}`);
  console.log(`Ratio deuda actual: ${(ratioDeuda * 100).toFixed(1)}% (máximo permitido: 40%)`);
}

const contrasenaIngresada = "Segura123";
const contrasenaCorrecta  = "Segura123";
let intentosFallidos      = 0;
const MAX_INTENTOS        = 3;

if (contrasenaIngresada === contrasenaCorrecta) {
  console.log("Acceso al sistema corporativo SmartZone: Autenticación exitosa.");
} else {
  intentosFallidos++;
  const intentosRestantes = MAX_INTENTOS - intentosFallidos;
  console.log(`Contraseña incorrecta. Accesos restantes al panel técnico: ${intentosRestantes}`);
}