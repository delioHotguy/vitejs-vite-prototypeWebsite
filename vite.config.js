import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',
  },
  base: process.env.NODE_ENV === 'production' ? '/': '',

  plugins: [react()],
})

