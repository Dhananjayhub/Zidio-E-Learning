import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";

dotenv.config();


const app = express();

app.use(express.json());   //using middleware

const port = process.env.PORT ;


app.get("/", (req, res) => {
    res.send("Hello World!");
});

import userRoutes from "./routes/user.js";
app.use("/api", userRoutes);



app.listen(port, () => {
    console.log(`     Server is running on port http://localhost:${port} `);
    connectDB();
});