import { useContext } from 'react'
import { ThemeContext } from './../../contexts'

export const useAppTheme = () => {
  return useContext(ThemeContext)
}
