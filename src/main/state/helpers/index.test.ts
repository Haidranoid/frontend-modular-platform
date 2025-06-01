import { getErrorMessage } from './index'

describe('getErrorMessage function', () => {
  it('should return the message from a native Error object', () => {
    const error = new Error('Something went wrong')
    expect(getErrorMessage(error)).toBe('Something went wrong')
  })

  it('should return the message from an object with a message property', () => {
    const error = { message: 'Custom error message' }
    expect(getErrorMessage(error)).toBe('Custom error message')
  })

  it('should return a fallback message for null', () => {
    expect(getErrorMessage(null)).toBe('An unexpected error occurred.')
  })

  it('should return a fallback message for undefined', () => {
    expect(getErrorMessage(undefined)).toBe('An unexpected error occurred.')
  })

  it('should return a fallback message for a string (non-object)', () => {
    expect(getErrorMessage('some string')).toBe('An unexpected error occurred.')
  })

  it('should handle objects without a message property', () => {
    const error = { code: 404 }
    expect(getErrorMessage(error)).toBe('An unexpected error occurred.')
  })

  it('should safely coerce a numeric message value', () => {
    const error = { message: 404 }
    expect(getErrorMessage(error)).toBe('404')
  })
})
