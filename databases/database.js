import { postgres } from "../deps.js";

let sql;
if (Deno.env.get("db_url")) {
  sql = postgres(Deno.env.get("db_url"));
} else {
  sql = postgres({});
}

export { sql };