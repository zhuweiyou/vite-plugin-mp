# vite-plugin-mp

configure multi-pages applications and code splitting

## Usage

```bash
npm install vite-plugin-src vite-plugin-mp -D
```

```js
// vite.config.js
import { defineConfig } from 'vite'
import { ViteSrcPlugin } from 'vite-plugin-src'
import { ViteMpPlugin } from 'vite-plugin-mp'

export default defineConfig({
  plugins: [ViteSrcPlugin(), ViteMpPlugin()],
})
```
