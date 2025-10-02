'use strict';

var require$$0 = require('react');
var ThemeContext = require('../../contexts/theme-context/ThemeContext.cjs');

var useAppTheme = function useAppTheme() {
  return require$$0.useContext(ThemeContext.ThemeContext);
};

exports.useAppTheme = useAppTheme;
