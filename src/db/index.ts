import { env } from "@config/env.ts";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client(env.DB_URL);

await client.connect();
const db = drizzle(client);