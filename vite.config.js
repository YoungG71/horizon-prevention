import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Pour les domaines personnalisés sur GitHub Pages, la base est la racine
  plugins: [react()],
})