# vite-plugin-mp

Configure multi-pages applications and code splitting

## Usage

```bash
npm install vite-plugin-mp -D
```

```js
// vite.config.js
import { defineConfig } from 'vite'
import mp from 'vite-plugin-mp'

export default defineConfig({
  plugins: [mp()],
})
```

add `jsconfig.json` or `tsconfig.json` to your project

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

> or `"src/*": ["src/*"]`

## Example

See [example](https://github.com/zhuweiyou/vite-plugin-mp/tree/master/example) and <https://zhuweiyou.github.io/vite-plugin-mp/>

## Other Plugins

- [vite-plugin-minify](https://github.com/zhuweiyou/vite-plugin-minify) - minify html in production
