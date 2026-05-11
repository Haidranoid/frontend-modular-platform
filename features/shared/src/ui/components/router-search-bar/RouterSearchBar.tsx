import { FC } from 'react'
import { useLocation } from 'react-router'
import { Bar, NavButton, AddressBar } from './RouterSearchBar.styled'

export const RouterSearchBar: FC = () => {
  const location = useLocation()

  return (
    <Bar data-testid="router-debug-bar">
      <NavButton>{'<'}</NavButton>
      <NavButton>{'>'}</NavButton>

      <AddressBar>
        http://app.local
        <div data-testid="location-pathname">{location.pathname}</div>
        {location.search}
      </AddressBar>
    </Bar>
  )
}

/*
3. Cypress lo puede assertar
cy.visit('/iframe.html?id=app-auth--default')

cy.get('[data-testid="router-debug-bar"]')
  .should('contain', '/auth')


Y luego después de navegación:

cy.contains('Sign up').click()

cy.get('[data-testid="router-debug-bar"]')
  .should('contain', '/auth/signup')


 Bonus: apagarlo fuera de Storybook

Si quieres blindarlo:

if (!import.meta.env.STORYBOOK) return null


o con globals de Storybook:

globals: { showRouterDebug: true }


 */
