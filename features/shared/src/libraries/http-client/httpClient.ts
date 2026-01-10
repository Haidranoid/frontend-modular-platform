import axios, { AxiosHeaders } from 'axios'
import * as qs from 'query-string'
import { AuthenticationService, getBrowserSecurityService } from '#utils'
import { HttpMethods } from '#constants'
import type {
  AxiosConfigurationBuilder,
  CustomHeaders,
  EndpointBuilder,
  GenerateQueryParams,
  HttpClientType,
  ReplaceEndpointVariables,
  RequestParams,
} from './httpClient.types.js'

export const generateQueryParams: GenerateQueryParams = (endpoint, queryParams) => {
  if (!queryParams) return endpoint
  return endpoint + `?${qs.stringify(queryParams)}`
}

export const replaceEndpointVariables: ReplaceEndpointVariables = (
  endpoint,
  variables,
) => {
  if (!variables) return endpoint

  return Object.keys(variables).reduce(
    (url, key) => url.replace(`{${key}}`, String(variables[key])),
    endpoint,
  )
}

const buildEndpoint: EndpointBuilder = (endpoint, queryParams, endpointVariables) => {
  const withVars = replaceEndpointVariables(endpoint, endpointVariables)
  const finalUrl = generateQueryParams(endpoint, queryParams)
  return finalUrl
}

export const getDefaultHeaders = (): CustomHeaders => ({
  'Device-Id': `${getBrowserSecurityService().getBrowserFingerprint()}`,
  'Content-Type': 'application/json',
})

export const buildAxiosConfig: AxiosConfigurationBuilder = (
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

  if (useAuthorization) {
    const token = AuthenticationService.getAccessToken()
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
  }

  if (customHeaders) {
    for (const [key, value] of Object.entries(customHeaders)) {
      headers.set(key, value)
    }
  }

  return { headers }
}

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
  const config = buildAxiosConfig(customHeaders, useDefaultHeaders, useAuthorization)
  const endpointExpanded = replaceEndpointVariables(endpoint, endpointVariables)
  const finalUrl = generateQueryParams(endpointExpanded, queryParams)

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

export const httpClient: HttpClientType = {
  get: (params) => request({ ...params, method: HttpMethods.GET }),
  post: (params) => request({ ...params, method: HttpMethods.POST }),
  put: (params) => request({ ...params, method: HttpMethods.PUT }),
  patch: (params) => request({ ...params, method: HttpMethods.PATCH }),
  delete: (params) => request({ ...params, method: HttpMethods.DELETE }),
}
