import { defineConfig } from 'vite'
import mp from 'vite-plugin-mp'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import minify from 'vite-plugin-minify'

export default defineConfig({
  base: '/vite-plugin-mp/',
  plugins: [mp(), react(), vue(), minify()],
})
