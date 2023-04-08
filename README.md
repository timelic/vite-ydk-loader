# vite-ydk-loader

A vite plugin allows to import *.ydk file in Node.js.

## Install

```bash
$ pnpm install vite-ydk-loader -D
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
