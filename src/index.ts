import { Plugin, mergeConfig, splitVendorChunkPlugin } from 'vite'
import { resolve } from 'path'
import glob from 'glob'

const r = (p: string) => resolve(process.cwd(), p)

export function ViteMpPlugin(): Plugin {
  return {
    name: 'vite-plugin-mp',
    config: userConfig => {
      const newConfig = mergeConfig(
        {
          root: 'src',
          resolve: {
            alias: {
              '@': r('src'),
              src: r('src'),
            },
          },
          publicDir: r('public'),
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
      )
      if (!newConfig.plugins) {
        newConfig.plugins = []
      }
      newConfig.plugins.push(splitVendorChunkPlugin())
      return newConfig
    },
  }
}

export default ViteMpPlugin
