import { defineConfig } from 'vite'
import { ViteMpPlugin as mp } from 'vite-plugin-mp'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/example/',
  plugins: [mp(), react(), vue()],
})
