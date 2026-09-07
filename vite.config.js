import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * `base` is the path the site is served from.
 *
 * GitHub Pages serves a project repo at https://<user>.github.io/<repo>/, so
 * this must match the repository name. Change it to '/' when you move to a
 * custom domain or a <user>.github.io repo, or set BASE_PATH in the
 * environment for a one-off build.
 */
export default defineConfig({
  base: process.env.BASE_PATH || '/heal/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
