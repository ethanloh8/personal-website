import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "https://ethanloh8.github.io/personal-website/",
  plugins: [react()],
})
