import { isEmpty, isNil, pickBy } from 'lodash'
import { HasNullProperties, HasNullFormData } from '@validators/interfaces/index.types'

export const hasNullProperties: HasNullProperties = (obj, keysExceptions = []) => {
  if (!obj) {
    return true
  }

  // Get all properties that are null, undefined, or empty strings, excluding keys in keysExceptions
  const nilProps = pickBy(obj, (value, key) => {
    // Exclude the properties from the validation if they are in keysExceptions
    if (keysExceptions.includes(key)) {
      return false
    }

    // Check for null, undefined, or empty string values
    return isNil(value) || value === ''
  })

  // If there are any null/undefined/empty string properties that aren't excluded, return true
  return !isEmpty(nilProps)
}

export const hasNullFormData: HasNullFormData = (form, props) => {
  // Return true if form is null or undefined
  if (!form) {
    return true
  }

  // Check for null, undefined, empty string, or string 'null' values in the FormData object
  const keys = Array.from(form.keys())
  for (const key of keys) {
    const value = form.get(key)

    // Check for the value being null, undefined, empty string, or the string 'null'
    if (isNil(value) || value === '' || value === 'null') {
      return true
    }
  }

  // Check if all props exist in the form
  for (const prop of props) {
    if (!form.has(prop)) {
      return true
    }
  }

  return false
}

/*
export const routeDoesNotExist: RouteDoesNotExistType = (pathToEvaluate: string) => {
  const notExist = Object.values(Paths).includes(pathToEvaluate)

  if (!notExist) return RedirectToNotFoundIgnore

  return undefined
}*/
