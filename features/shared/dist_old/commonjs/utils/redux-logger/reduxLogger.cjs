'use strict';

var reduxLogger$1 = require('redux-logger');

var reduxLogger = reduxLogger$1.createLogger({
  collapsed: false,
  predicate: function predicate() {
    return !!window['Cypress'];
  },
  // only log in cypress
  stateTransformer: function stateTransformer(state) {
    return JSON.parse(JSON.stringify(state));
  },
  actionTransformer: function actionTransformer(action) {
    return JSON.parse(JSON.stringify(action));
  }
});

exports.reduxLogger = reduxLogger;
