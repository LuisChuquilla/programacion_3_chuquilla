// src/components/ProductCatalogList.tsx

interface Mascota {
  id: number
  name: string
  type: string
  price: number
  age: number
}

interface MascotaCatalogListProps {
  mascotas: Mascota[]
  title?: string
}

export default function MascotaCatalogList({
  mascotas,
  title = 'Catálogo',
}: MascotaCatalogListProps) {
  return (
    <section>
      <h2 style={{ marginBottom: 16 }}>{title}</h2>
    </section>
  )
}