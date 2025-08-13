import { AxiosRequestConfig, RawAxiosResponseHeaders, AxiosResponseHeaders } from 'axios'
import HttpMethods from './http-methods'

export type Body = object | FormData | void
export type Response = object | undefined

export type HttpClientType = {
  get: <R>(params: Omit<RequestParams<undefined>, 'method' | 'body'>) => Promise<R>
  post: <B, R>(params: Omit<RequestParams<B>, 'method'>) => Promise<R>
  put: <B, R>(params: Omit<RequestParams<B>, 'method'>) => Promise<R>
  patch: <B, R>(params: Omit<RequestParams<Partial<B>>, 'method'>) => Promise<R>
  delete: <R>(params: Omit<RequestParams<undefined>, 'method' | 'body'>) => Promise<R>
}

export type GenerateQueryParams = (queryParams: object | undefined) => string

export type ReplaceEndpointVariables = (
  endpoint: string,
  endpointVariables: object | undefined,
) => string

export type EndpointBuilder = (
  endpoint: string,
  queryParams?: object,
  endpointVariables?: object,
) => string

export type DefaultAxiosHeaders = RawAxiosResponseHeaders | AxiosResponseHeaders

export type AxiosConfigurationBuilder = (
  customHeaders?: DefaultAxiosHeaders,
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
  customHeaders?: DefaultAxiosHeaders
  axiosRequestConfig?: AxiosRequestConfig
  returnFullResponse?: boolean
}
