// @config/env/src/node.ts (para scripts/tests/SSR)
import 'dotenv/config'
import { EnvSchema } from './schema'
export const env = EnvSchema.parse(process.env)
