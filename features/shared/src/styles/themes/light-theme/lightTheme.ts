import { CustomTheme } from '../themes.types'

export const lightTheme: CustomTheme = {
  name: 'light',
  colors: {
    feedback: {
      error: '#dc2626',
      success: '#16a34a',
      warning: '#d97706',
    },
    brand: {
      primary: '#2563eb',
      secondary: '#3b82f6',
    },
    background: {
      app: '#ffffff',
      surface: '#f3f4f6',
    },
    text: {
      primary: '#111827',
      secondary: '#6b7280',
      error: '#dc2626',
      success: '#16a34a',
      warning: '#d97706',
    },
    border: {
      default: '#d1d5db',
      focus: '#2563eb',
      error: '#dc2626',
      success: '#16a34a',
      warning: '#d97706',
    },
  },
}

export type LightTheme = typeof lightTheme
