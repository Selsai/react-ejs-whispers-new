// server.js
import express from "express";
import bodyParser from "body-parser";
import { getAll } from "./store.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Configurer __dirname pour ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Route /about
app.get("/about", async (req, res) => {
  const whispers = await getAll();
  res.render("about", { whispers });
});

export { app };
