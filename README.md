# Install

```bash
npm i -D vite-plugin-html-hooks
```

Add plugin to your `vite.config.ts`:

```typescript
import htmlHooks from 'vite-plugin-html-hooks';

export default defineConfig(() => {
  return {
    plugins: [
      htmlHooks((html: string) => {
        return html.replace(/<title>.*<\/title>/g, `<title>Hello world</title>`);
      }),
    ],
  };
});
```
