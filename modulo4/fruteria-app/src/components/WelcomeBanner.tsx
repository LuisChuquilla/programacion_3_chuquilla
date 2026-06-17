// src/components/WelcomeBanner.tsx
interface WelcomeProps {
  subtitle?: string
}

export default function WelcomeBanner({subtitle }) {
  return (
    <div style={{ background: 'green', color: '#fff', padding: '16px 24px', borderRadius: 0 }}>
      <h1 style={{ margin: 0, fontSize: 32 }}>Bienvenido al curso de React</h1>
      <p style={{ margin: '6px 0 0', opacity: 0.85 }}>Aprende React 19 con TypeScript</p>
      <p style={{ margin: '6px 0 0', opacity: 0.85 }}>{subtitle ?? 'Aprende React 19 con TypeScript'}</p>
    </div>
  )
}