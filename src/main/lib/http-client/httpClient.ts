import { default as axios } from 'axios'
import qs from 'query-string'
import { HttpMethods } from '@constants'
import browserSecurityService from '@lib/security-service/SecurityService'
import AuthenticationService from '@lib/auth-service/AuthenticationService'
import {
  HttpClientType,
  GenerateQueryParams,
  ReplaceEndpointVariables,
  EndpointBuilder,
  DefaultAxiosHeaders,
  AxiosConfigurationBuilder,
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

const buildAxiosConfig: AxiosConfigurationBuilder = (
  customHeaders = {},
  useDefaultHeaders = true,
  useAuthorization = true,
) => {
  let headers: DefaultAxiosHeaders = {}

  if (useDefaultHeaders) {
    headers = {
      'Device-Id': `${browserSecurityService.getBrowserFingerprint()}`,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
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

  switch (method) {
    case HttpMethods.GET:
      return axiosInstance.get<R>(finalUrl, config)
    case HttpMethods.POST:
      return axiosInstance.post<R>(finalUrl, body, config)
    case HttpMethods.PUT:
      return axiosInstance.put<R>(finalUrl, body, config)
    case HttpMethods.PATCH:
      return axiosInstance.patch<R>(finalUrl, body, config)
    case HttpMethods.DELETE:
      return axiosInstance.delete<R>(finalUrl, config)
  }
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
