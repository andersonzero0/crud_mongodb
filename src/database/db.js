import { MongoClient } from "mongodb";
import "dotenv/config";

const uri = process.env.MONGODB_URI;
const db = process.env.MONGODB_DB;

const client = new MongoClient(uri);

async function ConnectDB() {

    try {

        await client.connect();
        console.log("Connected successfully to server");
        
        return client.db(db);
        
    } catch (err) {

        console.log(err);
        
    }
    
}

export { ConnectDB, client };