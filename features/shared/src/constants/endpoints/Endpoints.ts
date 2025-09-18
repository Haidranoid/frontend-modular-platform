//import { getBaseUrl } from '@libraries/utils'

//const baseUrl = getBaseUrl()
const baseUrl = 'http://localhost:8080'

export const Endpoints = {
  ROOT: `${baseUrl}/`,
  GET_USERS: `${baseUrl}/api/v1/users`,
  GET_USER: `${baseUrl}/api/v1/users/{userId}`,
  CREATE_USER: `${baseUrl}/api/v1/users`,
  UPDATE_USER: `${baseUrl}/api/v1/users/{userId}`,
  DELETE_USER: `${baseUrl}/api/v1/users/{userId}`,
}
