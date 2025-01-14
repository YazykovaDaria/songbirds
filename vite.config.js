import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        quizz: resolve(__dirname, 'quizz/index.html'),
        results: resolve(__dirname, 'results/index.html'),
      },
    },
  },

  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src', 'handlebars', 'partials'),
    }),
  ],

  server: {
    open: true,
  },
});
