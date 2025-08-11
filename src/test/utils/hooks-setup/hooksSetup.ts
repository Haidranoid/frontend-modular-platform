// tests/utils/hooks-setup/index.ts
jest.mock('@hooks/use-actions', () => ({
  __esModule: true,
  useActions: () => ({ me: jest.fn() }),
}))

jest.mock('@hooks/use-app-selector', () => ({
  __esModule: true,
  useAppSelector: jest.fn(),
}))
