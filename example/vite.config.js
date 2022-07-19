import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import { ViteMinifyPlugin as minify } from 'vite-plugin-minify'
import { ViteMpPlugin as mp } from 'vite-plugin-mp'

export default defineConfig({
  base: '/vite-plugin-mp/',
  plugins: [mp(), react(), vue(), minify()],
})
