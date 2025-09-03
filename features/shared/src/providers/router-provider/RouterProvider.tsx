import {FC} from "react";
import {RouterProvider as ReactRouterProvider, RouteObject } from 'react-router'
import {configureRouter} from "#utils";

export interface RouterProviderOptions {
    routes: RouteObject[]
}

export const RouterProvider: FC<RouterProviderOptions> = (options) => {
    const router = configureRouter(options.routes)
    return  <ReactRouterProvider router={router} />
}
