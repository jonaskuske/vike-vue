import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "node:path"
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: {
        config: resolve(__dirname, "./renderer/+config.ts"),
        clientOnly: resolve(__dirname, "./components/ClientOnly.vue"),
        onRenderClient: resolve(__dirname, "./renderer/onRenderClient.ts"),
        onRenderHtml: resolve(__dirname, "./renderer/onRenderHtml.ts"),
        usePageContext: resolve(__dirname, "./components/usePageContext.ts"),
        useData: resolve(__dirname, "./components/useData.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue", "vike", "vike/server", "vike/types"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
})
