export type StatusCodeMap = {
  // 2XX
  200: 'OK'
  201: 'CREATED'
  204: 'NO_CONTENT'
  // 3XX
  301: 'MOVED_PERMANENTLY'
  302: 'FOUND'
  // 4XX
  400: 'BAD_REQUEST'
  401: 'UNAUTHORIZED'
  403: 'FORBIDDEN'
  404: 'NOT_FOUND'
  // 5XX
  500: 'INTERNAL_SERVER_ERROR'
  502: 'BAD_GATEWAY'
  503: 'SERVICE_UNAVAILABLE'
}

export type StatusString<T extends number, N extends string> = `${T}_${N}`

export type HttpStatusKey = {
  [K in keyof StatusCodeMap]: StatusString<K & number, StatusCodeMap[K]>
}[keyof StatusCodeMap]
