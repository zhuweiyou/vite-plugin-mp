# vite-plugin-mp

Configure multi-pages applications and code splitting

## Usage

```bash
npm install vite-plugin-mp -D
```

```js
// vite.config.js
import { defineConfig } from 'vite'
import { ViteMpPlugin } from 'vite-plugin-mp'

export default defineConfig({
  plugins: [ViteMpPlugin()],
})
```

add `jsconfig.json` or `tsconfig.json` to your project

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "src/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

if you want to force extract `node_modules` for `vendor`, you can import `splitVendorChunkPlugin`

```js
// vite.config.js
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { ViteMpPlugin } from 'vite-plugin-mp'

export default defineConfig({
  plugins: [ViteMpPlugin(), splitVendorChunkPlugin()],
})
```

## Example

See [example](https://github.com/zhuweiyou/vite-plugin-mp/tree/master/example) and <https://zhuweiyou.github.io/vite-plugin-mp/>

## Other Plugins

- [vite-plugin-minify](https://github.com/zhuweiyou/vite-plugin-minify) - Minify html in production
