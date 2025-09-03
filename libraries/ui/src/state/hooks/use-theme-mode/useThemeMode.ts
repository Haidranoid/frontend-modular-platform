import { useContext } from 'react'
import { ThemeContext } from '../../contexts'

export const useThemeMode = () => {
  //console.log("useThemeMode context ref:", ThemeContext);

  return useContext(ThemeContext)
}
