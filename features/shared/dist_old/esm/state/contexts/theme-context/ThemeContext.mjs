import { createContext } from 'react';
import { darkTheme } from '../../../styles/themes/dark-theme/darkTheme.mjs';

var ThemeContext = /*#__PURE__*/createContext({
  mode: darkTheme,
  toggle: function toggle() {
    return console.warn('ThemeContext: default toggle');
  }
});

export { ThemeContext };
