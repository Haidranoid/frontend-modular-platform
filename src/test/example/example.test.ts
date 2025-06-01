import { describe, it, expect } from '@jest/globals'

/**
 * A simple utility function that adds two numbers
 */
function add(a: number, b: number): number {
  return a + b
}

describe('Example Test', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5)
    expect(add(-1, 1)).toBe(0)
    expect(add(0, 0)).toBe(0)
  })
})
