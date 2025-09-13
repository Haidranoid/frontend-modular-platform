import { createBrowserRouter, DOMRouterOpts, RouteObject } from 'react-router'

// ========================== app render ==============================
interface ConfigureAppRouterParams {
  routes: RouteObject[]
  opts?: DOMRouterOpts
}

export const configureAppRouter = (params: ConfigureAppRouterParams) => {
  return createBrowserRouter(params.routes, params.opts)
}

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
