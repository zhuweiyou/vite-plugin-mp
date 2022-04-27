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

add `jsconfig.json` or `tsconfig.json` in your project

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

## Example

See [example](https://github.com/zhuweiyou/vite-plugin-mp/tree/master/example) and <https://zhuweiyou.github.io/vite-plugin-mp/>
