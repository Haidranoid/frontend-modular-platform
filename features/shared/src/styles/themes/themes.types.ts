export interface CustomTheme {
  name: string
  colors: {
    feedback: {
      error: string
      success: string
      warning: string
    }
    brand: {
      primary: string
      secondary: string
    }
    background: {
      app: string
      surface: string
    }
    text: {
      primary: string
      secondary: string
      error: string
      success: string
      warning: string
    }
    border: {
      default: string
      focus: string
      error: string
      success: string
      warning: string
    }
  }
}
