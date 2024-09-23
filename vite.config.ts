import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: `/fluent-code-gen/`, // This is hard coded for the GitHub Pages deployment. See https://vitejs.dev/guide/static-deploy#github-pages
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        logout: resolve(__dirname, "logout.html"),
      },
    },
  },
});
