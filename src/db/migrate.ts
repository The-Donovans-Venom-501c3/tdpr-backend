import { migrate } from "drizzle-orm/libsql/migrator";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import chalk from "chalk";
import { env } from "../env";

async function main() {
  const db = drizzle(createClient({ url: env.DATABASE_URL } ));

  console.log(chalk.yellowBright('Running migrations'))

  await migrate(db, { migrationsFolder: "drizzle" });

  console.log(chalk.greenBright('Migrations applied successfully!'))

  process.exit(0)
}

main().catch((e) => {
    console.error(chalk.redBright('Migrations failed!'))
    console.error(e)
    process.exit(1)
});