import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

import './styles/base.css'
import './styles/pages.css'

// Served from /heal/ on GitHub Pages, from / in dev. Vite fills in BASE_URL;
// React Router wants it without the trailing slash.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
