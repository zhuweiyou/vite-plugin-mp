import { Plugin, mergeConfig, splitVendorChunkPlugin } from 'vite'
import { resolve } from 'path'
import glob from 'glob'

const r = (p: string) => resolve(process.cwd(), p)

export function ViteMpPlugin(): Plugin {
  return {
    name: 'vite-plugin-mp',
    config: userConfig =>
      mergeConfig(
        {
          root: 'src',
          resolve: {
            alias: {
              '@': r('src'),
              src: r('src'),
            },
          },
          publicDir: r('public'),
          plugins: [splitVendorChunkPlugin()],
          build: {
            emptyOutDir: true,
            outDir: r('dist'),
            rollupOptions: {
              input: glob.sync('src/**/*.html').reduce(
                (obj, file) => ({
                  ...obj,
                  [file
                    .split('/')
                    .slice(1)
                    .join('.')
                    .replace(/(\.index)?\.html$/, '')]: file,
                }),
                {}
              ),
            },
          },
        },
        userConfig
      ),
  }
}

export default ViteMpPlugin
