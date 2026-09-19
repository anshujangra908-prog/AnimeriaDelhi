import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { spawn } from 'child_process'
import http from 'http'

// Automatically start Node.js backend server whenever Vite runs
function autoStartBackend() {
  let backendProcess = null
  return {
    name: 'auto-start-backend',
    configureServer(server) {
      const checkReq = http.get('http://localhost:5000/api/health', () => {
        console.log('\x1b[32m✔ Animeria Backend Server is already active on port 5000\x1b[0m')
      })

      checkReq.on('error', () => {
        console.log('\x1b[36m🚀 Automatically starting Animeria Backend Server on port 5000...\x1b[0m')
        backendProcess = spawn('node', ['server/server.js'], {
          stdio: 'inherit',
          shell: true
        })

        backendProcess.on('error', (err) => {
          console.error('Failed to auto-start backend server:', err)
        })
      })

      const cleanup = () => {
        if (backendProcess) {
          try {
            backendProcess.kill()
          } catch (e) {}
        }
      }

      process.on('exit', cleanup)
      process.on('SIGINT', cleanup)
      process.on('SIGTERM', cleanup)

      server.httpServer?.on('close', cleanup)
    }
  }
}

export default defineConfig({
  plugins: [
    autoStartBackend(),
    react(),
    tailwindcss(),
  ],
  server: {
    watch: {
      ignored: ['**/server/**', '**/server/data/**', '**/.git/**']
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Vite 8 / rolldown requires manualChunks as a function
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons'
          }
          if (id.includes('AboutPage')) return 'page-about'
          if (id.includes('PoliciesPage')) return 'page-policies'
          if (id.includes('ContactPage')) return 'page-contact'
          if (id.includes('CourseDetailPage')) return 'page-courses'
          if (id.includes('CertificationsPage')) return 'page-certifications'
          if (id.includes('AdmissionFormPage')) return 'page-admission'
          if (id.includes('AdminPortalPage')) return 'page-admin'
        }
      }
    }
  }
})


