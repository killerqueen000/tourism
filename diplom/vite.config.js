import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), cssInjectedByJsPlugin()],
  base: '/tourism/',
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})