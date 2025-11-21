export const curlyToColon = (path: string): string => {
  return path.replace(/\{([^{}]+)\}/g, (_match, p1) => `:${p1}`)
}
