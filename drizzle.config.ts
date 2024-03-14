import type { Config } from "drizzle-kit";
import { env } from "./src/env";

export default {
  schema: "./src/db/schema/index.ts",
  driver: "turso",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  out: "./drizzle",
  // Print all statements
  verbose: true,
  // Always ask for my confirmation
  strict: true,
} satisfies Config;