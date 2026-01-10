import { AxiosRequestConfig } from 'axios'
import { HttpMethods } from '#constants'

export type HttpClientType = {
  get: <R>(params: Omit<RequestParams<undefined>, 'method' | 'body'>) => Promise<R>
  post: <B, R>(params: Omit<RequestParams<B>, 'method'>) => Promise<R>
  put: <B, R>(params: Omit<RequestParams<B>, 'method'>) => Promise<R>
  patch: <B, R>(params: Omit<RequestParams<Partial<B>>, 'method'>) => Promise<R>
  delete: <R>(params: Omit<RequestParams<undefined>, 'method' | 'body'>) => Promise<R>
}

export type GenerateQueryParams = (
  endpoint: string,
  queryParams: object | undefined,
) => string

export type ReplaceEndpointVariables = (
  endpoint: string,
  endpointVariables: object | undefined,
) => string

export type EndpointBuilder = (
  endpoint: string,
  queryParams?: object,
  endpointVariables?: object,
) => string

export type CustomHeaders = Record<string, string>

export type AxiosConfigurationBuilder = (
  customHeaders?: CustomHeaders,
  useDefaultHeaders?: boolean,
  useAuthorization?: boolean,
) => AxiosRequestConfig

export interface RequestParams<B> {
  endpoint: string
  method: HttpMethods
  body?: B
  endpointVariables?: object
  queryParams?: object
  useDefaultHeaders?: boolean
  useAuthorization?: boolean
  customHeaders?: CustomHeaders
  axiosRequestConfig?: AxiosRequestConfig
  returnFullResponse?: boolean
}
