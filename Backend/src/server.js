import express from "express";
import cors from "cors"
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();
dotenv.config();
console.log(process.env.MONGO_URI);

const PORT = process.env.PORT || 5001;


// Middleware pour parser JSON
app.use(cors(
    {origin:"http://localhost:5173",}
    
))
app.use(express.json());
app.use(rateLimiter)


// Montre le routeur complet
app.use("/api/notes", notesRoutes);
connectDB().then (() =>{
    app.listen(PORT, () => {
    console.log("Server Started On PORT :", PORT);
});

})

