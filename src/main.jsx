import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { loadFonts } from './fonts.js'
import './index.css'

loadFonts()

const root = document.getElementById('root')
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// The production build prerenders the page into #root (scripts/prerender.mjs),
// so hydrate it there; the dev server still starts from an empty root.
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app)
} else {
  ReactDOM.createRoot(root).render(app)
}
