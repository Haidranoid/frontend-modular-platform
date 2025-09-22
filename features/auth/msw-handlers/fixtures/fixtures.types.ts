export interface FixtureParams<B> {
  requestBody: B
}

export type Fixture<R, B = any> = (params: FixtureParams<B>) => R
