// tests/utils/hooks-setup/index.ts
jest.mock('@hooks/use-actions', () => ({
  __esModule: true,
  default: () => ({ me: jest.fn() }),
}))

jest.mock('@hooks/use-typed-selector', () => ({
  __esModule: true,
  default: jest.fn(),
}))

it('should match 1 and 1', () => {
  expect(1).toBe(1)
})
