export function hasPayloadProperty(
  error: unknown,
): error is { payload: { message: string } } {
  return typeof error === 'object' && error !== null && 'payload' in error
}

export function hasMessageProperty(error: unknown): error is { message: unknown } {
  return typeof error === 'object' && error !== null && 'message' in error
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }

  if (hasPayloadProperty(error)) {
    return String(error.payload.message)
  }

  if (hasMessageProperty(error)) {
    return String(error.message)
  }

  return 'An unexpected error occurred.'
}
