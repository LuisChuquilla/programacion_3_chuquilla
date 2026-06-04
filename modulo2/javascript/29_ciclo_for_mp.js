
console.log("Ciclo for")
for (let i=0;i<5;i++){
    console.log(i);
}


const frutas = ["pera", "manzana", "naranja"]
for (let i=0;i<frutas.length;i++){
    console.log(frutas[i]);
    fruta=frutas[i]
    console.log(fruta)
}


for(let fruta of frutas){
    console.log(fruta);
}

// Ejemplo — sistema de reintentos de conexión
const MAX_REINTENTOS   = 3;
const TIMEOUT_SEGUNDOS = 2;
let reintentos         = 0;
let conexionExitosa    = false;

do {
  reintentos++;
  console.log(`Intento ${reintentos}/${MAX_REINTENTOS}: conectando al servidor...`);

  // Simulación: la conexión falla en los primeros 2 intentos
  if (reintentos >= 3) {
    conexionExitosa = true;
  }

  if (!conexionExitosa && reintentos < MAX_REINTENTOS) {
    console.log(`  ⏳ Fallo. Reintentando en ${TIMEOUT_SEGUNDOS}s...`);
  }

} while (!conexionExitosa && reintentos < MAX_REINTENTOS);

if (conexionExitosa) {
  console.log("✅ Conexión establecida correctamente.");
} else {
  console.log("❌ No se pudo conectar. Verifique el servidor.");
}
// Intento 1/3: conectando al servidor...
//   ⏳ Fallo. Reintentando en 2s...
// Intento 2/3: conectando al servidor...
//   ⏳ Fallo. Reintentando en 2s...
// Intento 3/3: conectando al servidor...
// ✅ Conexión establecida correctamente.


// Ejemplo — reporte de inventario con alertas por posición
const inventario = [
  { codigo: "A01", nombre: "Teclado",  stock: 2  },
  { codigo: "A02", nombre: "Monitor",  stock: 15 },
  { codigo: "A03", nombre: "Mouse",    stock: 0  },
  { codigo: "A04", nombre: "Audífonos",stock: 7  },
  { codigo: "A05", nombre: "Webcam",   stock: 1  },
];

const STOCK_CRITICO = 3;

console.log("=== Reporte de inventario ===");
console.log(`${"#".padEnd(4)} ${"Código".padEnd(6)} ${"Producto".padEnd(12)} Stock  Estado`);
console.log("─".repeat(48));

for (let i = 0; i < inventario.length; i++) {
  const item   = inventario[i];
  const numero = String(i + 1).padStart(2, "0");

  let estado;
  if (item.stock === 0) {
    estado = "🔴 AGOTADO";
  } else if (item.stock <= STOCK_CRITICO) {
    estado = "🟡 CRÍTICO";
  } else {
    estado = "🟢 Normal";
  }

  console.log(
    `${numero}.  ${item.codigo.padEnd(6)} ${item.nombre.padEnd(12)} ` +
    `${String(item.stock).padStart(3)}u   ${estado}`
  );
}
// ===  Reporte de inventario ===
// #    Código Producto     Stock  Estado
// ────────────────────────────────────────────────
// 01.  A01    Teclado        2u   🟡 CRÍTICO
// 02.  A02    Monitor       15u   🟢 Normal
// 03.  A03    Mouse          0u   🔴 AGOTADO
// 04.  A04    Audífonos      7u   🟢 Normal
// 05.  A05    Webcam         1u   🟡 CRÍTICO


// Ejemplo — resumen de ventas por vendedor
const reporteVentas = [
  { vendedor: "Carlos",  monto: 3200, region: "Norte" },
  { vendedor: "María",   monto: 4750, region: "Sur"   },
  { vendedor: "Luis",    monto: 2100, region: "Norte" },
  { vendedor: "Sofía",   monto: 5300, region: "Sur"   },
  { vendedor: "Roberto", monto: 1800, region: "Este"  },
];

const META_INDIVIDUAL  = 3000;
let totalGeneral       = 0;
let vendedoresEnMeta   = 0;

console.log("=== Resumen de ventas ===");

for (const venta of reporteVentas) {
  totalGeneral += venta.monto;

  const cumpleMeta = venta.monto >= META_INDIVIDUAL;
  if (cumpleMeta) {
    vendedoresEnMeta++;
  }

  const indicador = cumpleMeta ? "✅" : "⚠️";
  console.log(
    `${indicador} ${venta.vendedor.padEnd(8)} ` +
    `[${venta.region.padEnd(5)}]  ` +
    `$${venta.monto.toLocaleString()}`
  );
}

console.log("─".repeat(38));
console.log(`Total general:    $${totalGeneral.toLocaleString()}`);
console.log(`En meta (≥$${META_INDIVIDUAL}): ${vendedoresEnMeta}/${reporteVentas.length} vendedores`);
// ✅ Carlos   [Norte]  $3,200
// ✅ María    [Sur  ]  $4,750
// ⚠️ Luis     [Norte]  $2,100
// ✅ Sofía    [Sur  ]  $5,300
// ⚠️ Roberto  [Este ]  $1,800
// ──────────────────────────────────────
// Total general:    $17,150
// En meta (≥$3000): 3/5 vendedores

// Ejemplo — análisis de texto: contar vocales y consonantes
const texto      = "JavaScript es increíble";
const VOCALES    = new Set(["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"]);
let conteoVocales    = 0;
let conteoConsonantes = 0;
let conteoEspacios    = 0;

for (const caracter of texto.toLowerCase()) {
  if (caracter === " ") {
    conteoEspacios++;
  } else if (VOCALES.has(caracter)) {
    conteoVocales++;
  } else if (caracter >= "a" && caracter <= "z") {
    conteoConsonantes++;
  }
}

console.log(`Texto: "${texto}"`);
console.log(`Vocales:     ${conteoVocales}`);
console.log(`Consonantes: ${conteoConsonantes}`);
console.log(`Espacios:    ${conteoEspacios}`);
console.log(`Total letras:${conteoVocales + conteoConsonantes}`);
// Texto: "JavaScript es increíble"
// Vocales:     8
// Consonantes: 12
// Espacios:    2
// Total letras: 20

// Ejemplo — ranking de productos más vendidos
const productosTop = ["Laptop Pro", "Auriculares BT", "Teclado Mec.", "Monitor 4K", "Webcam HD"];

console.log("=== Top 5 productos más vendidos ===");

for (const [posicion, producto] of productosTop.entries()) {
  const medalla =
    posicion === 0 ? "🥇" :
    posicion === 1 ? "🥈" :
    posicion === 2 ? "🥉" : `${posicion + 1}. `;

  console.log(`${medalla} ${producto}`);
}
// 🥇 Laptop Pro
// 🥈 Auriculares BT
// 🥉 Teclado Mec.
// 4.  Monitor 4K
// 5.  Webcam HD


// Ejemplo — mostrar configuración de sistema
const configuracionSistema = {
  idioma:       "es-EC",
  moneda:       "USD",
  zonaHoraria:  "America/Guayaquil",
  formatoFecha: "DD/MM/YYYY",
  maxSesiones:  3,
  modoOscuro:   false
};

console.log("=== Configuración actual del sistema ===");

for (const clave in configuracionSistema) {
  const valor = configuracionSistema[clave];

  // Formatear booleanos para mejor legibilidad
  const valorMostrado = typeof valor === "boolean"
    ? (valor ? "Activado" : "Desactivado")
    : valor;

  console.log(`  ${clave.padEnd(14)}: ${valorMostrado}`);
}
// === Configuración actual del sistema ===
//   idioma        : es-EC
//   moneda        : USD
//   zonaHoraria   : America/Guayaquil
//   formatoFecha  : DD/MM/YYYY
//   maxSesiones   : 3
//   modoOscuro    : Desactivado

// break — sale del bucle inmediatamente
// Ejemplo: buscar el primer producto con stock crítico
const productos = [
  { nombre: "Router",    stock: 10 },
  { nombre: "Switch",    stock: 4  },
  { nombre: "Firewall",  stock: 1  }, // ← primero con stock crítico
  { nombre: "Access Point", stock: 0 },
];

const STOCK_CRITICO = 2;

for (const producto of productos) {
  if (producto.stock <= STOCK_CRITICO) {
    console.log(`⚠️ Primer producto crítico encontrado: ${producto.nombre} (stock: ${producto.stock})`);
    break; // no es necesario seguir buscando
  }
}
// ⚠️ Primer producto crítico encontrado: Firewall (stock: 1)

// continue — salta a la siguiente iteración
// Ejemplo: procesar solo transacciones aprobadas
const transacciones = [
  { id: "TX001", monto: 500,  estado: "aprobada"  },
  { id: "TX002", monto: 200,  estado: "rechazada" },
  { id: "TX003", monto: 850,  estado: "aprobada"  },
  { id: "TX004", monto: 120,  estado: "pendiente" },
  { id: "TX005", monto: 1200, estado: "aprobada"  },
];

let totalAprobado = 0;

console.log("=== Procesando transacciones aprobadas ===");

for (const tx of transacciones) {
  if (tx.estado !== "aprobada") {
    console.log(`  ↩️  ${tx.id} omitida (${tx.estado})`);
    continue; // saltar transacciones no aprobadas
  }

  totalAprobado += tx.monto;
  console.log(`  ✅ ${tx.id}: $${tx.monto}`);
}

console.log(`Total aprobado: $${totalAprobado}`);
// ✅ TX001: $500
// ↩️  TX002 omitida (rechazada)
// ✅ TX003: $850
// ↩️  TX004 omitida (pendiente)
// ✅ TX005: $1200
// Total aprobado: $2550

