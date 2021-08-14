import { createStore } from 'vuex'

export default createStore({
  state: {
    deviceType: 'desktop'
  },
  mutations: {
    changeType(state, value) {
      state.deviceType = window.innerWidth > 700 ?
          'desktop' :
          'tablet'
    }
  }
})
