import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  theme: 'dark' | 'light'
}

const initialState: ThemeState = {
  theme: 'dark'
} as const

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload
    }
  }
})

export const getThemeState = (state: { theme: ThemeState }) => state.theme
export const { setTheme } = themeSlice.actions
export default themeSlice.reducer