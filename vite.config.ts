import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.', // 项目根目录
  publicDir: 'public', // 静态资源目录
  plugins: [react()],
  build: {
    outDir: 'dist', // 构建输出目录
  },
})
