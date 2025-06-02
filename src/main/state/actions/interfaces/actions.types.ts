// ------------------------------------------------------------------------------------
export type ActionTypes = object
export type ActionPayload = object | undefined | string

export type ErrorMessage = string

export interface Action {
  type: string
  payload?: ActionPayload
}
