// @config/env/src/client.ts (para el browser)
import { EnvSchema } from './schema.ts'

/*
declare global {
  interface Window {
    __APP_CONFIG__?: Partial<Record<string, unknown>>
  }
}*/

export const getEnv = () => EnvSchema.parse(window.__APP_CONFIG__ ?? {})
