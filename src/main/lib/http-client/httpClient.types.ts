import { AxiosRequestConfig, RawAxiosRequestHeaders, AxiosHeaders } from 'axios'
import { HttpMethods } from '@constants'

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

export type ConfigureAxiosRequest = (
  useDefaultHeaders: boolean,
  useAuthorization: boolean,
  customHeaders: DefaultAxiosHeaders,
  axiosConfig: AxiosRequestConfig,
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
