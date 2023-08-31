import { postgres } from "../deps";
import sql from "../databases/database.js"

const getMessage = async () => {
    return await sql`SELECT * FROM messages ORDER BY id DESC LIMIT 5`;
}

const addMessage = async (sender, message) => {
    return await sql`INSERT INTO messages (sender, message) VALUES (${sender}, ${message})`;
}

export {getMessage, addMessage}; 
