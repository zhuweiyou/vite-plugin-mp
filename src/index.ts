import { Plugin } from 'vite'
import glob from 'glob'
import path from 'path'
import { merge } from 'lodash'

const resolve = filePath => path.resolve(process.cwd(), filePath)

export function ViteMpPlugin(): Plugin {
  return {
    name: 'vite-plugin-mp',
    config: otherConfig =>
      merge(
        {
          root: 'src',
          resolve: {
            alias: {
              '@': resolve('src'),
            },
          },
          publicDir: resolve('public'),
          build: {
            emptyOutDir: true,
            outDir: resolve('dist'),
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
              output: {
                manualChunks: (id, { getModuleInfo }) => {
                  if (
                    [
                      'commonjsHelpers.js',
                      '\x00commonjsHelpers.js',
                      'vite/modulepreload-polyfill',
                    ].includes(id)
                  ) {
                    return 'runtime'
                  }

                  if (
                    id.includes('/node_modules/') &&
                    getModuleInfo(id).importers.length > 1
                  ) {
                    return id.split('node_modules/')[1].split('/')[0]
                  }
                },
              },
            },
          },
        },
        otherConfig
      ),
  }
}
