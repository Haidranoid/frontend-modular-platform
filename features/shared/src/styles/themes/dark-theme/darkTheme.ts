import { CustomTheme } from '../themes.types'

export const darkTheme: CustomTheme = {
  name: 'dark',
  colors: {
    feedback: {
      error: '#f87171',
      success: '#4ade80',
      warning: '#fbbf24',
    },
    brand: {
      primary: '#60a5fa',
      secondary: '#3b82f6',
    },
    background: {
      app: '#1f2937',
      surface: '#374151',
    },
    text: {
      primary: '#f9fafb',
      secondary: '#9ca3af',
      error: '#f87171',
      success: '#4ade80',
      warning: '#fbbf24',
    },
    border: {
      default: '#4b5563',
      focus: '#60a5fa',
      error: '#f87171',
      success: '#4ade80',
      warning: '#fbbf24',
    },
  },
}

export type DarkTheme = typeof darkTheme
