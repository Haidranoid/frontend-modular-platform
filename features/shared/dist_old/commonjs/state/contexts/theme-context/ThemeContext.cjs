'use strict';

var require$$0 = require('react');
var darkTheme = require('../../../styles/themes/dark-theme/darkTheme.cjs');

var ThemeContext = /*#__PURE__*/require$$0.createContext({
  mode: darkTheme.darkTheme,
  toggle: function toggle() {
    return console.warn('ThemeContext: default toggle');
  }
});

exports.ThemeContext = ThemeContext;
