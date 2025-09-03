import { createBrowserRouter, RouteObject } from 'react-router'

export const configureRouter = (routes: RouteObject[]) => {
    return createBrowserRouter(routes)
}