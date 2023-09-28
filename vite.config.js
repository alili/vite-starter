import { fileURLToPath, URL } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ['src/components', 'src/views'],
      extensions: ['vue'],
      resolvers: [
        ArcoResolver({
          sideEffect: true,
        }),
      ],
    }),
    AutoImport({
      imports: ['vue', 'pinia', 'vue-router'],
      dirs: ['src/store', 'src/hooks'],
      resolvers: [
        ArcoResolver({
          ignoreIcons: ['icon-'],
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
