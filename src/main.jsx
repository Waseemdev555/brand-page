import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Nav } from 'react-bootstrap'
import Hero from './Components/Hero.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
   <Nav />
   <Hero />
  </React.StrictMode>,
)
