import { getBaseUrl } from '@lib/http-client/helpers'

const baseUrl = getBaseUrl()

const Endpoints = {
  ROOT: `${baseUrl}/`,
  ME: `${baseUrl}/api/v1/auth/me`,
  LOGIN: `${baseUrl}/api/v1/auth/login`,
  SIGNUP: `${baseUrl}/api/v1/auth/signup`,
  LOGOUT: `${baseUrl}/api/v1/auth/logout`,
  GET_USERS: `${baseUrl}/api/v1/users`,
  GET_USER: `${baseUrl}/api/v1/users/{userId}`,
  CREATE_USER: `${baseUrl}/api/v1/users`,
  UPDATE_USER: `${baseUrl}/api/v1/users/{userId}`,
  DELETE_USER: `${baseUrl}/api/v1/users/{userId}`,
}

export default Endpoints
