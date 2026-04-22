import mysql from "mysql2/promise"
import dotenv from "dotenv"

dotenv.config();

class DataBase {
    private static instance: DataBase;
    private connection: mysql.Pool;


    private constructor() {
        this.connection = mysql.createPool({
            host: process.env.DB_HOST!,
            user: process.env.DB_USER!,
            password: process.env.DB_PASSWORD!,
            database: process.env.DB_NAME!,
            port: Number(process.env.DB_PORT)!
        });
    }

    public static getInstance(): DataBase {
        if (!DataBase.instance) {
            DataBase.instance = new DataBase();
        }
        return DataBase.instance;
    }

    public getConnection() {
        return this.connection;
    }

}

export default DataBase;