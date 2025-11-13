import { FC } from 'react'
import {
  createBrowserRouter,
  createMemoryRouter,
  useLocation,
  DOMRouterOpts,
  RouteObject,
} from 'react-router'

export interface ConfigureAppRouterParams {
  routes: RouteObject[]
  initialPath?: string
  opts?: DOMRouterOpts
}

const LocationDebugger: FC = () => {
  const location = useLocation()
  return <div data-testid="current-path">{location.pathname}</div>
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
          <LocationDebugger />
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
