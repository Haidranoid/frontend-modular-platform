export type HasNullProperties = (
  obj: object | null | undefined,
  keysExceptions?: string[],
) => boolean

export type HasNullFormData = (
  obj: FormData | undefined,
  propsToEvaluate: string[],
) => boolean

export type RouteDoesNotExistType = (
  pathToEvaluate: string,
) => (() => JSX.Element) | undefined
