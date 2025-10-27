import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDB } from "./config/database.js";
import {
  handleCardCreate,
  handleGetCards,
} from "./controllers/card.controller.js";
dotenv.config();
// App Config
const app = express();
const PORT = process.env.PORT || 8001;

// Middlewares
app.use(express.json());

// Cors Middleware
app.use(cors({ origin: "*" }));

// API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.post("/tinder/cards", handleCardCreate);
app.get("/tinder/cards", handleGetCards);

// Listener
connectToDB(() => {
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
});
