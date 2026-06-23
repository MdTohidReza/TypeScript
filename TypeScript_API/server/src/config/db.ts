import mysql from "mysql2/promise";
import "dotenv/config";  // ← add this as the very first line


const Db_connection = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "TypeScript_API",
});
const testConnection = async () => {
  const [rows] = await Db_connection.query("SELECT 1");
  console.log("✅ MySQL connected successfully");
};

testConnection().catch((err) => {
  console.error("❌ MySQL connection failed:", err.message);
});

export default Db_connection;