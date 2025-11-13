import {
  createBrowserRouter,
  createMemoryRouter,
  Outlet,
  DOMRouterOpts,
  RouteObject,
} from "react-router";
import { StorybookContextBox } from "#ui";

// ========================== app render ==============================
export interface ConfigureAppRouterParams {
  routes: RouteObject[]
  initialPath?: string
  opts?: DOMRouterOpts
}

export const configureAppRouter = (params: ConfigureAppRouterParams) => {
  if (params.initialPath) {
    /*const rootRoute: RouteObject = {
      element: (
        <>
          <StorybookContextBox
            title={'App Context'}
            items={[]}
            domElement={document.body}
          />
          <Outlet />
        </>
      ),
      children: params.routes,
    }

    return createMemoryRouter([rootRoute], {
      initialEntries: [params.initialPath],
    })*/
    return createMemoryRouter(params.routes, {
      initialEntries: [params.initialPath],
    })
  }

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
