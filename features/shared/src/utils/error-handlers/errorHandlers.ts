export function hasMessageProperty(error: unknown): error is { message: unknown } {
  return typeof error === 'object' && error !== null && 'message' in error
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }

  if (hasMessageProperty(error)) {
    return String(error.message)
  }

  return 'An unexpected error occurred.'
}
