import { Plugin } from '@nuxt/types'

const myPlugin: Plugin = ({ store }) => {
  if (!process.server) {
    window.addEventListener('load', () => {
      store.dispatch('adaptive/changeType', window.innerWidth)
    })
    window.addEventListener('resize', () => {
      store.dispatch('adaptive/changeType', window.innerWidth)
    })
  }
}

export default myPlugin
