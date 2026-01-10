export function hasProperties(obj: object | undefined): boolean {
  if (obj === undefined || obj === null || typeof obj !== 'object') {
    return false
  }
  return Object.keys(obj).length > 0
  //return Object.getOwnPropertyNames(obj).length > 0;
}
