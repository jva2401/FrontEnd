import express from "express";
import { config } from "dotenv";
import ejs from "ejs";
import path from 'path';
import { fileURLToPath } from 'url';
import rutas from "./routes/index.js";
import cookieParser from 'cookie-parser';

// Configurar dotenv
config();

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // Usar path.join en lugar de concatenar cadenas
app.set("port", process.env.PORT || 11000);
app.use(express.static(path.join(__dirname, 'public')));  // Usar path.join en lugar de concatenar cadenas
app.use("/", rutas);

export default app;
