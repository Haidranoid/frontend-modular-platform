export interface FixtureParams<B> {
  requestBody: B
}

export type Fixture<R, B = void> = [B] extends [void]
  ? (params?: FixtureParams<any>) => R // si no pasas B → opcional
  : (params: FixtureParams<B>) => R // si pasas B → obligatorio
