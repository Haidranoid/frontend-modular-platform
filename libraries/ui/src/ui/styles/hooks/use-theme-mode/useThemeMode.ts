import { useContext } from 'react'
import {themeContext} from "#state";

export const useThemeMode = () => useContext(themeContext)
