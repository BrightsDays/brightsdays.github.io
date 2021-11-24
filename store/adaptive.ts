// @ts-ignore
import { GetterTree, MutationTree, ActionTree } from 'vuex'

export const state = () => ({
  deviceType: 'desktop'
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  deviceType: (state: { deviceType: string }) => state.deviceType
}

export const mutations: MutationTree<RootState> = {
  CHANGE_TYPE: (state: { deviceType: string }, windowWidth: number) => (
    state.deviceType = windowWidth > 700
      ? 'desktop'
      : 'tablet'
  )
}

export const actions: ActionTree<RootState, RootState> = {
  changeType: (context: { commit: (arg0: string, arg1: number) => void }, windowWidth: number) => {
    context.commit('CHANGE_TYPE', windowWidth)
  }
}
