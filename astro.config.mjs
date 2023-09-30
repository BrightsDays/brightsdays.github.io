import { defineConfig } from 'astro/config'
import autoprefixer from 'autoprefixer'
import react from '@astrojs/react'
import node from '@astrojs/node'

export default defineConfig({
  scopedStyleStrategy: 'class',
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    css: {
      postcss: {
        plugins: [autoprefixer()],
      },
    },
  },
})