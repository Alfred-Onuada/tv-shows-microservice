import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();

const uri = process.env.DB_URL;

const client = new MongoClient(uri);

(async function setupDB() {
  try {
    await client.connect();

    // check connection
    await client.db("admin").command({ ping: 1 });
    console.log("Database connection established");
  } catch (error) {
    console.log("Database connection failed");
    console.log(error);
  }
})();

const db = client.db("tv_shows_db");
export default db;