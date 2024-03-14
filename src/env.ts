import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url().min(1),
  DATABASE_AUTH_TOKEN: z.string().min(1),
})

export const env = envSchema.parse(process.env)