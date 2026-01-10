type StatusString<T extends number, N extends string> = `${T}_${N}`

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,

  MOVED_PERMANENTLY = 301,
  FOUND = 302,

  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,

  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
}

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

/*
export type HttpStatusKey =
    { [K in keyof StatusKeyMap]: `${K & number}_${StatusKeyMap[K]}` }[keyof StatusKeyMap]
*/
export type HttpStatusKey = {
  [K in keyof StatusCodeMap]: StatusString<K & number, StatusCodeMap[K]>
}[keyof StatusCodeMap]
