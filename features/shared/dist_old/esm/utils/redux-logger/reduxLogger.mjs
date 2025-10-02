import { createLogger } from 'redux-logger';

var reduxLogger = createLogger({
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

export { reduxLogger };
