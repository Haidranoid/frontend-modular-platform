export type FixtureParams<B = {}, P = {}> = {
  body: B
  params: P
}

export type Fixture<R, B = {}, P = {}> = (params: Partial<FixtureParams<B, P>>) => R

/*export interface FixtureParams<B = void, P = void> {

  body: B extends void ? undefined : B
  params: P extends void ? undefined : P
}

export type Fixture<R, B = void, P = void> =
// Caso sin body ni params
  (B extends void ? (P extends void ? ((params?: FixtureParams) => R) : never) : never)
  |
  // Caso solo params
  (B extends void ? (P extends void ? never : ((params: FixtureParams<void, P>) => R)) : never)
  |
  // Caso solo body
  (B extends void ? never : (P extends void ? ((params: FixtureParams<B, void>) => R) : never))
  |
  // Caso body + params
  ((params: FixtureParams<B, P>) => R)
*/
