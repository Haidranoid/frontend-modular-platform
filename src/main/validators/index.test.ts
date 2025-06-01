import { hasNullProperties, hasNullFormData } from './index'

describe('Validators functions', () => {
  describe('hasNullProperties', () => {
    it('should return true if object is null or undefined', () => {
      expect(hasNullProperties(null)).toBe(true)
      expect(hasNullProperties(undefined)).toBe(true)
    })

    it('should return false if all properties are non-null/undefined/empty', () => {
      const validObject = { name: 'John', age: 30 }
      expect(hasNullProperties(validObject)).toBe(false)
    })

    it('should return true if properties are null, undefined, or empty string', () => {
      const objWithNullProps = { name: 'John', age: null }
      const objWithEmptyStringProps = { name: '', age: 30 }
      const objWithUndefinedProps = { name: undefined, age: 30 }

      expect(hasNullProperties(objWithNullProps)).toBe(true)
      expect(hasNullProperties(objWithEmptyStringProps)).toBe(true)
      expect(hasNullProperties(objWithUndefinedProps)).toBe(true)
    })

    it('should handle exceptions and not validate excluded keys', () => {
      const objWithExceptions = { name: 'John', age: null, address: '' }
      expect(hasNullProperties(objWithExceptions, ['name'])).toBe(true) // 'name' is excluded, only 'age' and 'address' are checked
      expect(hasNullProperties(objWithExceptions, ['address'])).toBe(true) // 'address' is empty, so it's invalid
      expect(hasNullProperties(objWithExceptions, ['age'])).toBe(true) // 'age' is null, so it's invalid
    })

    it('should return false if no null/undefined/empty string properties and keysExceptions is used', () => {
      const validObjectWithExceptions = { name: 'John', age: 30, address: '' }
      expect(hasNullProperties(validObjectWithExceptions, ['address'])).toBe(false)
    })
  })

  describe('hasNullFormData', () => {
    it('should return true if form contains null, undefined, empty string, or string "null" values', () => {
      const form = new FormData()
      form.append('name', 'John')
      form.append('age', '') // Empty string value
      expect(hasNullFormData(form, ['name', 'age'])).toBe(true) // age is an empty string, should return true

      const form2 = new FormData()
      form2.append('name', 'John')
      form2.append('age', '') // Empty string value
      expect(hasNullFormData(form2, ['name', 'age'])).toBe(true) // age is an empty string, should return true

      const form3 = new FormData()
      form3.append('name', 'John')
      form3.append('age', 'null') // string 'null'
      expect(hasNullFormData(form3, ['name', 'age'])).toBe(true) // age is 'null' (string), should return true
    })

    it('should return true if the form does not contain the required props', () => {
      const form = new FormData()
      form.append('name', 'John')
      form.append('age', '25')

      expect(hasNullFormData(form, ['name', 'email'])).toBe(true) // 'email' is missing, so it returns true
    })

    it('should return false if the form has no null, undefined, or empty string values', () => {
      const form = new FormData()
      form.append('name', 'John')
      form.append('age', '25')

      expect(hasNullFormData(form, ['name', 'age'])).toBe(false) // no null/empty values
    })

    it('should return false if the form contains all required props and no null values', () => {
      const form = new FormData()
      form.append('name', 'John')
      form.append('age', '25')

      expect(hasNullFormData(form, ['name', 'age'])).toBe(false) // All required properties are present and have valid values
    })

    it('should return true if the form is missing any required props', () => {
      const form = new FormData()
      form.append('name', 'John')

      expect(hasNullFormData(form, ['name', 'age'])).toBe(true) // 'age' is missing
    })

    it('should return true if form is undefined', () => {
      expect(hasNullFormData(undefined, ['name', 'age'])).toBe(true)
    })
  })
})
