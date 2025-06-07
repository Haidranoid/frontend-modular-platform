import {
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
  AxiosHeaders,
  AxiosResponse,
} from 'axios'
import { HttpMethods } from '@constants'

export type Body = object | FormData | void
export type Response = object | undefined

export type HttpClientType = {
  get: <R>(
    params: Omit<RequestParams<undefined>, 'method' | 'body'>,
  ) => Promise<AxiosResponse<R>>
  post: <B, R>(params: Omit<RequestParams<B>, 'method'>) => Promise<AxiosResponse<R>>
  put: <B, R>(params: Omit<RequestParams<B>, 'method'>) => Promise<AxiosResponse<R>>
  patch: <B, R>(params: Omit<RequestParams<B>, 'method'>) => Promise<AxiosResponse<R>>
  delete: <R>(
    params: Omit<RequestParams<undefined>, 'method' | 'body'>,
  ) => Promise<AxiosResponse<R>>
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

export type DefaultAxiosHeaders = RawAxiosRequestHeaders | typeof AxiosHeaders

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
}
