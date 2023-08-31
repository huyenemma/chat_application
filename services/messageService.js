import postgres from "https://deno.land/x/postgresjs@v3.3.3/mod.js";

const sql = postgres({});

const getMessage = async () => {
    return await sql`SELECT * FROM messages ORDER BY id DESC LIMIT 5`;
}

const addMessage = async (sender, message) => {
    return await sql`INSERT INTO messages (sender, message) VALUES (${sender}, ${message})`;
}

export {getMessage, addMessage}; 
