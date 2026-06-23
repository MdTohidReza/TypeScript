import Db_connection from "./db.ts";

export const migrate = async ()=>{
    await Db_connection.query(
           `CREATE TABLE IF NOT EXISTS items(
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
              description TEXT,
            created_at TIMESTAMP DEFAULT NOW()
        )`
    )
    console.log("Tables is Ready")
}