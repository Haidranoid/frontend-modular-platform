import { createBrowserRouter } from 'react-router';

// ========================== app render ==============================

var configureAppRouter = function configureAppRouter(params) {
  return createBrowserRouter(params.routes, params.opts);
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

export { configureAppRouter };
