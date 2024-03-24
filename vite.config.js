import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configure the MIME types
    mimeTypes: {
      // Serve .js files as application/javascript
      'application/javascript': ['js', 'jsx'],
      // Add other MIME type configurations if needed
    },
  },
})
