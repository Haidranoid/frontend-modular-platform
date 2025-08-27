export type ExtractPathVariables = (endpoint: string | null) => object

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

export const extractPathVariables: ExtractPathVariables = (endpoint) => {
  const regex = /\{([^}]+)\}/g // Matches `{variableName}`
  const variables = {}

  let match

  if (!endpoint) {
    return {}
  }

  while ((match = regex.exec(endpoint)) !== null) {
    variables[match[1]] = '' // Initialize with empty string or default value
  }

  return variables
}

export const getBaseUrl = () => {
  const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV
  const host = window.location.hostname
  const devUrl = `http://${host}:8080`
  const prodUrl = process.env.BASE_URL || `http://${host}:8080`
  return isDev ? devUrl : prodUrl
}
