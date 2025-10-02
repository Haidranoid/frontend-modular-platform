'use strict';

var reactRouter = require('react-router');

// ========================== app render ==============================

var configureAppRouter = function configureAppRouter(params) {
  return reactRouter.createBrowserRouter(params.routes, params.opts);
};

// ========================== storybook render ==============================
/*
interface ConfigureAppMemoryRouterParams {
  routes: RouteObject[]
  initialPath?: string
}

export const configureAppMemoryRouter = (params: ConfigureAppMemoryRouterParams) => {
  return createMemoryRouter(params.routes, {initialEntries: [params.initialPath || "/"]});
}
*/

exports.configureAppRouter = configureAppRouter;
