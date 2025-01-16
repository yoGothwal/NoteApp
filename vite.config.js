import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const BASEURL = mode === "development" ? 'http://localhost:3001/api' : 'https://your-production-api.com/api'
  return {
    define: {
      'process.env.baseUrl': JSON.stringify(BASEURL)
    },
    plugins: [react()],
  }
})
