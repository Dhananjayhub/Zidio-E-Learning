import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";
const app = express();
const port = process.env.PORT || 5000;
dotenv.config();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`     Server is running on port http://localhost:${port} `);
    connectDB
});