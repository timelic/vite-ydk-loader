# vite-ydk-loader

Only for `Node.js`.

## Install

```bash
$ pnpm install
```

## Usage

```ts
import ydkLoader from "vite-ydk-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [..., ydkLoader()],
  resolve: {
    extensions: [".ydk"],
  },
});
```

## LICENSE

MIT
