import { RouteObject } from 'react-router'
import { BasePaths } from '@webapp/shared/constants'
import { Home } from '#ui'

export const routes: RouteObject[] = [
    {
        path: BasePaths.USERS_BASE,
        children: [
            {
                index: true,
                Component: Home,
            },
        ],
    },
]
