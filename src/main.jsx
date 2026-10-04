import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import './styles/hero.css'
import './styles/about.css'
import './styles/stats.css'
import './styles/academics.css'
import './styles/campus.css'
import './styles/beyond.css'
import './styles/scroll-progress.css'
import "./styles/admissions.css"
import "./styles/footer.css"

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)