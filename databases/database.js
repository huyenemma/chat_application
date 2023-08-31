import { postgres } from "../deps.js";

let sql;
if (Deno.env.get("db_url")) {
  sql = postgres(Deno.env.get("DATABASE_URL"));
} else {
  sql = postgres({});
}

export { sql };