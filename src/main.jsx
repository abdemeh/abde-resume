import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const removeLoader = () => {
  const loader = document.getElementById('app-loader')
  if (!loader) return
  loader.style.opacity = '0'
  loader.addEventListener('transitionend', () => loader.remove(), { once: true })
}

// Wait for all resources (CSS, fonts, images) before hiding the loader
if (document.readyState === 'complete') {
  requestAnimationFrame(removeLoader)
} else {
  window.addEventListener('load', removeLoader, { once: true })
}
