import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context/ThemeContext.mjs';

var useAppTheme = function useAppTheme() {
  return useContext(ThemeContext);
};

export { useAppTheme };
