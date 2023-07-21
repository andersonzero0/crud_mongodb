import express from "express";
import routes from "./src/routes/routes.js";
import "dotenv/config";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(routes)

app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}!`);
    
})