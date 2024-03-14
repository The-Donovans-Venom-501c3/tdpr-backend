import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";
import { createId } from "@paralleldrive/cuid2"

export const users = sqliteTable('users', {
  id: text('id').$defaultFn(() => createId()).primaryKey(),
  fullName: text('full_name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
});
