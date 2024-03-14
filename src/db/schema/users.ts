import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";
import { createId } from "@paralleldrive/cuid2"

export const users = sqliteTable('users', {
  id: text('id').$defaultFn(() => createId()),
  fullName: text('id').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  createdAt: text('createdAt').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updatedAt').default(sql`CURRENT_TIMESTAMP`),
});
