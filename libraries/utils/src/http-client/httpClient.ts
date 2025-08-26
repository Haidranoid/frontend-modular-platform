import axios, { AxiosHeaders } from 'axios'
import * as qs from 'query-string'
import { getBrowserSecurityService } from '../security-service/index.js'
import { AuthenticationService } from '../auth-service/index.js'
import {
  AxiosConfigurationBuilder,
  CustomHeaders,
  EndpointBuilder,
  GenerateQueryParams,
  HttpClientType,
  ReplaceEndpointVariables,
  RequestParams,
} from './httpClient.types.js'
import HttpMethods from './http-methods/index.js'

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

export const getDefaultHeaders = (): CustomHeaders => ({
  'Device-Id': `${getBrowserSecurityService().getBrowserFingerprint()}`,
  'Content-Type': 'application/json',
})

const buildAxiosConfig: AxiosConfigurationBuilder = (
  customHeaders,
  useDefaultHeaders = true,
  useAuthorization = true,
) => {
  const headers = new AxiosHeaders()

  if (useDefaultHeaders) {
    for (const [key, value] of Object.entries(getDefaultHeaders())) {
      headers.set(key, value)
    }
  }

  if (customHeaders) {
    for (const [key, value] of Object.entries(customHeaders)) {
      headers.set(key, value)
    }
  }

  if (useAuthorization) {
    const token = AuthenticationService.getAccessToken()
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
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
export const httpClient: HttpClientType = {
  get: (params) => request({ ...params, method: HttpMethods.GET }),
  post: (params) => request({ ...params, method: HttpMethods.POST }),
  put: (params) => request({ ...params, method: HttpMethods.PUT }),
  patch: (params) => request({ ...params, method: HttpMethods.PATCH }),
  delete: (params) => request({ ...params, method: HttpMethods.DELETE }),
}
