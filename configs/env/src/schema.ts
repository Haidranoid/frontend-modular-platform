// @config/env/src/schema.ts
import { z } from 'zod'
export const EnvSchema = z.object({
    API_URL: z.string().url(),
    FEATURE_X: z.boolean().default(false),
})
export type AppEnv = z.infer<typeof EnvSchema>
