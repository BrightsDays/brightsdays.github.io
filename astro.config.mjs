import { defineConfig } from 'astro/config'
import autoprefixer from 'autoprefixer'
import node from '@astrojs/node'

export default defineConfig({
  site: 'https://brightsdays.github.io',
  scopedStyleStrategy: 'class',
  output: 'static',
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
