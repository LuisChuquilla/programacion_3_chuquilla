import MascotaCatalogList from './components/MascotaCatalogList.tsx'

interface Mascota {
  id: number
  name: string
  type: string
  price: number
  age: number
}
  
const catalog: Mascota[] = [
  { id: 1, name: 'Carlitos',  price: 89.99, type: 'Labrador', age: 1 },
  { id: 2, name: 'Drako', price: 349.99, type:'Chihuahua', age: 2 },
  { id: 3, name: 'Robertito', price: 29.99, type:'Terrier', age: 1 },
  { id: 4, name: 'Carlitos 2', price: 59.99, type:'Labrador', age: 1 },
]

export default function AppMascota() {
  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif' }}>

      <MascotaCatalogList
      mascotas={catalog}
      title=''
      />
    </main>


  )
}