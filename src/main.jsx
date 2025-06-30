import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './landing_page/home/HomePage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <HomePage/>
    </div>
  </StrictMode>,
)
