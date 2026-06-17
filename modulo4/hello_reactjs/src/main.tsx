import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProductCard from './components/ProductCard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductCard/>
  </StrictMode>,
)
