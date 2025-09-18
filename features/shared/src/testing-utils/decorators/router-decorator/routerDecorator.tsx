import { MemoryRouter, Routes, Route } from 'react-router'
import { DecoratorFunction } from 'storybook/internal/csf'
import { ReactRenderer } from '@storybook/react-webpack5'

export interface WithRouterParameters {
  initialPath?: string
}

export const withRouter: DecoratorFunction<ReactRenderer> = (
  Story,
  { parameters },
) => {
  const initialPath = (parameters as WithRouterParameters).initialPath

  return (
    <MemoryRouter initialEntries={[initialPath || '/']}>
      <Routes>
        <Route path="*" element={<Story />} />
      </Routes>
    </MemoryRouter>
  )
}
