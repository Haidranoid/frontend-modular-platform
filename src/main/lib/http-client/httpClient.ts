import { default as axios, AxiosResponse } from 'axios'
import qs from 'query-string'
import { HttpMethods } from '@constants'
import browserSecurityService from '../security-service/SecurityService'
import AuthenticationService from '../auth-service/AuthenticationService'
import {
  GenerateQueryParams,
  ReplaceEndpointVariables,
  EndpointBuilder,
  DefaultAxiosHeaders,
  RequestParams,
  ConfigureAxiosRequest,
} from './httpClient.types'

/**
 * @description this function converts an object to query params.
 * @param queryParams example: {foo: 'foo', bar: 'bar'}
 * @return The query params as string, example: {foo: 'foo', bar: 'bar' } => ?foo=foo&bar=bar
 */
const generateQueryParams: GenerateQueryParams = (queryParams) => {
  if (!queryParams) {
    return ''
  }

  return `?${qs.stringify(queryParams)}`
}

/**
 * @description Replace in the endpoint string with the values declared in endpointVariables
 * @param endpoint example: ${baseUrl}/users/{spaceId}/{accountId}
 * @param endpointVariables example: {spaceId: 15, accountId: 24465}
 * @returns The endpoint with the variables replaced, example: ${baseUrl}/users/15/24465
 */
const replaceEndpointVariables: ReplaceEndpointVariables = (
  endpoint,
  endpointVariables,
) => {
  if (!endpointVariables) {
    return endpoint
  }

  return Object.keys(endpointVariables).reduce(
    (str, param) => str.replace(`{${param}}`, endpointVariables[param]),
    endpoint,
  )
}

/**
 * @description this function provide an abstraction to replace values in the url with
 * certain properties provided
 */
const endpointBuilder: EndpointBuilder = (endpoint, queryParams, endpointVariables) => {
  const endpointVariablesReplaced = replaceEndpointVariables(endpoint, endpointVariables)
  const queryParamsBuilt = generateQueryParams(queryParams)

  return `${endpointVariablesReplaced}${queryParamsBuilt}`
}

const configureAxiosRequest: ConfigureAxiosRequest = (
  useDefaultHeaders,
  useAuthorization,
  customHeaders,
  axiosConfig,
) => {
  // default headers
  const defaultHeaders: DefaultAxiosHeaders = {
    'Device-Id': `${browserSecurityService.getBrowserFingerprint()}`,
    'Access-Control-Allow-Origin': '*',
  }

  let headers: DefaultAxiosHeaders = {
    'Content-Type': 'application/json',
  }

  if (useDefaultHeaders) {
    headers = {
      ...headers,
      ...defaultHeaders,
    }
  }

  if (customHeaders) {
    headers = {
      ...headers,
      ...customHeaders,
    }
  }

  if (useAuthorization) {
    const accessToken = AuthenticationService.getAccessToken()
    headers = {
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    }
  }

  axiosConfig.headers = headers

  return axiosConfig
}

// default configuration
const Axios = axios.create()

type Response = object
type Body = object | FormData

const httpClient = async <R extends Response = Response, B extends Body = {}>(
  params: RequestParams<B>,
): Promise<AxiosResponse<R>> => {
  const {
    endpoint,
    method,
    body,
    endpointVariables,
    queryParams,
    useDefaultHeaders = true,
    useAuthorization = true,
    customHeaders = {},
    axiosRequestConfig = {},
  } = params

  const endpointBuilt = endpointBuilder(endpoint, queryParams, endpointVariables)
  const requestConfig = configureAxiosRequest(
    useDefaultHeaders,
    useAuthorization,
    customHeaders,
    axiosRequestConfig,
  )

  switch (method) {
    case HttpMethods.GET:
      return Axios.get(endpointBuilt, requestConfig)
    case HttpMethods.POST:
      return Axios.post(endpointBuilt, body, requestConfig)
    case HttpMethods.PUT:
      return Axios.put(endpointBuilt, body, requestConfig)
    case HttpMethods.PATCH:
      return Axios.patch(endpointBuilt, body, requestConfig)
    case HttpMethods.DELETE:
      return Axios.delete(endpointBuilt, requestConfig)
  }
}

export default httpClient
