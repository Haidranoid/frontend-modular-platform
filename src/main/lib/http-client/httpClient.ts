import { default as axios } from 'axios'
import qs from 'query-string'
import { HttpMethods } from '@constants'
import browserSecurityService from '@lib/security-service/SecurityService'
import AuthenticationService from '@lib/auth-service/AuthenticationService'
import {
  AxiosConfigurationBuilder,
  DefaultAxiosHeaders,
  EndpointBuilder,
  GenerateQueryParams,
  HttpClientType,
  ReplaceEndpointVariables,
  RequestParams,
} from './httpClient.types'

// ========== Utility Functions ==========
const generateQueryParams: GenerateQueryParams = (queryParams) => {
  return queryParams ? `?${qs.stringify(queryParams)}` : ''
}

const replaceEndpointVariables: ReplaceEndpointVariables = (endpoint, variables) => {
  if (!variables) return endpoint

  return Object.keys(variables).reduce(
    (url, key) => url.replace(`{${key}}`, String(variables[key])),
    endpoint,
  )
}

const buildEndpoint: EndpointBuilder = (endpoint, queryParams, endpointVariables) => {
  const withVars = replaceEndpointVariables(endpoint, endpointVariables)
  const query = generateQueryParams(queryParams)
  return `${withVars}${query}`
}

export const defaultHeaders: DefaultAxiosHeaders = {
  'Device-Id': `${browserSecurityService.getBrowserFingerprint()}`,
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
}

const buildAxiosConfig: AxiosConfigurationBuilder = (
  customHeaders = {},
  useDefaultHeaders = true,
  useAuthorization = true,
) => {
  let headers: DefaultAxiosHeaders = {}

  if (useDefaultHeaders) {
    headers = {
      ...defaultHeaders,
    }
  }

  if (customHeaders) {
    headers = { ...headers, ...customHeaders }
  }

  if (useAuthorization) {
    const token = AuthenticationService.getAccessToken()
    headers['Authorization'] = `Bearer ${token}`
  }

  return { headers }
}

// ========== HTTP Client Core ==========
const axiosInstance = axios.create()

async function request<R, B>({
  endpoint,
  method,
  body,
  queryParams,
  endpointVariables,
  useAuthorization,
  useDefaultHeaders,
  customHeaders,
}: RequestParams<B>) {
  const finalUrl = buildEndpoint(endpoint, queryParams, endpointVariables)
  const config = buildAxiosConfig(customHeaders, useDefaultHeaders, useAuthorization)

  const axiosMethods = {
    [HttpMethods.GET]: () => axiosInstance.get<undefined, R>(finalUrl, config),
    [HttpMethods.POST]: () => axiosInstance.post<B, R>(finalUrl, body, config),
    [HttpMethods.PUT]: () => axiosInstance.put<B, R>(finalUrl, body, config),
    [HttpMethods.PATCH]: () => axiosInstance.patch<B, R>(finalUrl, body, config),
    [HttpMethods.DELETE]: () => axiosInstance.delete<undefined, R>(finalUrl, config),
  }

  const response = await axiosMethods[method]()

  return response['data']
}

// ========== Public API ==========
const httpClient: HttpClientType = {
  get: (params) => request({ ...params, method: HttpMethods.GET }),
  post: (params) => request({ ...params, method: HttpMethods.POST }),
  put: (params) => request({ ...params, method: HttpMethods.PUT }),
  patch: (params) => request({ ...params, method: HttpMethods.PATCH }),
  delete: (params) => request({ ...params, method: HttpMethods.DELETE }),
}

export default httpClient
