import { defineConfig } from 'vite'
import sonik from 'sonik/vite'

export default defineConfig({
  build: {
    minify: true,
    rollupOptions: {
      output: {
        entryFileNames: '_worker.js'
      }
    }
  },
  plugins: [sonik()]
})
