import { AxiosRequestConfig, RawAxiosRequestHeaders, AxiosHeaders } from 'axios'
import HttpMethods from './HttpMethods'

type ContentType =
  | 'application/json'
  | 'application/x-www-form-urlencoded'
  | 'multipart/form-data'
  | 'text/plain'
  | 'text/html'
  | 'application/xml'
  | 'application/pdf'
  | 'image/png'
  | 'image/jpeg'
  | 'image/gif'
  | 'image/svg+xml'
  | 'audio/mpeg'
  | 'audio/ogg'
  | 'video/mp4'
  | 'video/webm'
  | 'application/octet-stream'

type GenerateQueryParams = (queryParams: object | undefined) => string

type ReplaceEndpointVariables = (
  endpoint: string,
  endpointVariables: object | undefined,
) => string

type EndpointBuilder = (
  endpoint: string,
  queryParams?: object,
  endpointVariables?: object,
) => string

type DefaultAxiosHeaders = RawAxiosRequestHeaders | typeof AxiosHeaders

type AxiosConfigurationBuilder = (
  useDefaultHeaders: boolean,
  useAuthorization: boolean,
  contentType: ContentType,
  customHeaders: DefaultAxiosHeaders,
  axiosConfig: AxiosRequestConfig,
) => AxiosRequestConfig

interface ClientParamsProperties<B> {
  endpoint: string
  method: HttpMethods
  body?: B
  endpointVariables?: object
  queryParams?: object
  useDefaultHeaders?: boolean
  useAuthorization?: boolean
  contentType?: ContentType
  customHeaders?: DefaultAxiosHeaders
  axiosRequestConfig?: AxiosRequestConfig
}

/**
 * @description HttpClient is a http client based on axios that allows you to configure it
 * as much as you want or simple, it supports a lot of type definitions, and you can use it
 * without headers or authorization. Also, can replace values from the endpoint provided to
 * create a more dynamic use
 * @template R Generic R is the return type expected from the endpoint provided
 * @template B Generic B is the shape of the body to use as payload in the request, you can
 * define it or just let it as is, an object.
 * @return The axios response
 */
/*
type HttpClient<
  B extends object | FormData = NonNullable<unknown>,
  R extends object = NonNullable<unknown>,
> = (clientParams: ClientParamsProperties<B>) => Promise<AxiosResponse<R>>
*/

export type {
  GenerateQueryParams,
  ReplaceEndpointVariables,
  EndpointBuilder,
  ContentType,
  DefaultAxiosHeaders,
  AxiosConfigurationBuilder,
  ClientParamsProperties,
}
