import { ConnectDB, client } from "../database/db.js";
import { ObjectId } from "mongodb";
import { modelProducts } from "../models/modelProducts.js";

async function insertProduct(name, amount, price) {
    
    try {

        const id = new ObjectId();
        
        const db = await ConnectDB();
        const product = new modelProducts(id, name, amount, price);

        const result = await db.collection("products").insertOne(product);

        client.close();

        console.log(result);
        
    } catch (error) {

        console.log(error);
        
    }
    
}

async function getProducts() {

    try {

        const db = await ConnectDB();
        const result = await db.collection("products").find({}).toArray();

        client.close();

        return result;
        
    } catch (error) {

        console.log(error);
        
    }
    
}

async function getProduct(product) {

    try {

        const db = await ConnectDB();
        const result = await db.collection("products").findOne({ name: product });

        client.close();

        return result;
        
    } catch (error) {

        console.log(error);
        
    }
    
}

export { insertProduct, getProducts, getProduct };