const env = process.env.NODE_ENV
const host = window.location.hostname
const devUrl = `http://${host}:8080`
const prodUrl = process.env.BASE_URL || `http://${host}:8080`
const baseUrl = env === 'development' ? devUrl : prodUrl

const Endpoints = {
  ROOT: `${baseUrl}/`,
  ME: `${baseUrl}/api/v1/auth/me`,
  LOGIN: `${baseUrl}/api/v1/auth/login`,
  LOGOUT: `${baseUrl}/api/v1/auth/logout`,
  GET_USERS: `${baseUrl}/api/v1/users`,
  GET_USER: `${baseUrl}/api/v1/users/{userId}`,
  CREATE_USER: `${baseUrl}/api/v1/users`,
  UPDATE_USER: `${baseUrl}/api/v1/users/{userId}`,
  DELETE_USER: `${baseUrl}/api/v1/users/{userId}`,
}

export default Endpoints
