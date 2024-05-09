import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { faUsers, faCog, faChartBar, faFileAlt } from '@fortawesome/free-solid-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
