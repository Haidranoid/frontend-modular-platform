import { ByRoleMatcher, within } from '@testing-library/react'

export function toContainRole(container: HTMLElement, role: ByRoleMatcher, quantity = 1) {
  const elements = within(container).queryAllByRole(role)

  if (elements.length === quantity) {
    return {
      pass: true,
      message: () => `${quantity} is already in use`,
    }
  }

  return {
    pass: false,
    message: () =>
      `Expected to find ${quantity} ${role} elements. Found ${elements.length} instead.`,
  }
}

/*
//expect.extend({ toContainRole })

test('the form displays two buttons', () => {
  render(<FormData />)

  const form = screen.getByRole('form')

  expect(form).toContainRole('link', 10)
})
*/
