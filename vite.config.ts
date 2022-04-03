import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: 'modules',
        replacement: path.resolve(__dirname, './src/modules'),
      },
    ],
  },
})
