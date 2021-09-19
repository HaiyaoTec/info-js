import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import infoJsPlugin from '@imf/infojs-plugin'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),infoJsPlugin()],
  //优化包依赖
  optimizeDeps:{
    exclude:['@infoJs-plugin-virtual-module']
  }
})
