//import { getBaseUrl } from '@libraries/utils'

//const baseUrl = getBaseUrl()
var baseUrl = 'http://localhost:8080';
var Endpoints = {
  ROOT: "".concat(baseUrl, "/"),
  GET_USERS: "".concat(baseUrl, "/api/v1/users"),
  GET_USER: "".concat(baseUrl, "/api/v1/users/{userId}"),
  CREATE_USER: "".concat(baseUrl, "/api/v1/users"),
  UPDATE_USER: "".concat(baseUrl, "/api/v1/users/{userId}"),
  DELETE_USER: "".concat(baseUrl, "/api/v1/users/{userId}")
};

export { Endpoints };
