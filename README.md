# vite-plugin-mp

configure multi-pages applications and code splitting

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

## Example

See [example](https://github.com/zhuweiyou/vite-plugin-mp/tree/master/example) and <https://zhuweiyou.github.io/vite-plugin-mp/>
