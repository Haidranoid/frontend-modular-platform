import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createIntegrationStory, Roles } from '@webapp/shared'
import {
  fetchAccounts_200_handler,
  fetchAccountsEnhanced_200_handler,
} from '#msw-handlers'
import { Home } from '#ui'

const meta = {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    withRouter: {
      routePath: '/accounts',
      initialPath: '/accounts',
    },
  },
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createIntegrationStory<Story>({
  parameters: {
    msw: {
      handlers: [fetchAccounts_200_handler],
    },
  },
})

export const Light: Story = createIntegrationStory<Story>({
  parameters: {
    msw: { handlers: [fetchAccountsEnhanced_200_handler] },
    withRedux: {
      initialState: {
        accounts: {
          accountsList: [],
          accountById: null,
        },
      },
    },
  },
})

export const Dark: Story = createIntegrationStory<Story>({
  parameters: {
    msw: { handlers: [] },
    //@ts-ignore
    withRedux: {
      initialState: {
        accounts: {
          accountsList: [],
          accountById: {
            id: 4305125789246172,
            password: 'qh5gav4PfBzY_nL',
            username: 'Kaylah_Durgan16',
            role: 'ADMIN',
            email: 'Mike28@gmail.com',
            firstName: 'Frederique',
            lastName: 'Blanda',
          },
        },
      },
    },
  },
})

export const LoggedIn: Story = createIntegrationStory<Story>({
  parameters: {
    msw: { handlers: [fetchAccountsEnhanced_200_handler] },

    withRedux: {
      initialState: {
        auth: {
          isLoading: false,
          error: null,
          isAuthenticated: true,
          session: {
            id: 4305125789246172,
            username: 'Kaylah_Durgan16',
            role: Roles.ADMIN,
            email: 'Mike28@gmail.com',
            firstName: 'Frederique',
            lastName: 'Blanda',
          },
        },
      },
    },
  },
})
