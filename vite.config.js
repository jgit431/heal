import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Nothing exotic here on purpose — plain Vite + React.
// `base` matters only if you deploy to a subfolder (e.g. GitHub Pages project site).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
