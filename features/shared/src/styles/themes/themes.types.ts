export interface CustomTheme {
  name: string
  colors: {
    primary: string
    secondary?: string
  }
  background: {
    primary: string
    secondary?: string
  }
  foreground: {
    primary: string
    secondary?: string
  }
  text: {
    primary: string
    secondary?: string
  }
}
