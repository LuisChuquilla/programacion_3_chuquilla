const PASO = 1

function PrimerComponente() {
  return (
    <main style={{ maxWidth: 480, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Hola desde Mi Primer Componente</h1>
      <p>Proyecto configurado con Vite 8.</p>
    </main>
  )
}

function SegundoComponente() {
  return (
    <main style={{ maxWidth: 480, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Este es mi Segundo Componente</h1>
      <p>Proyecto configurado con Vite 8.</p>
    </main>
  )
}

export default function AppPrimerComponente() {
  const content =
    PASO === 1 ? <PrimerComponente /> : 
    PASO === 2 ? <SegundoComponente /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return content
}