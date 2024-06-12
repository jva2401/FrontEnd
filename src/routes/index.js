import { Router } from "express";

import RutaUsuario from "./routes.usuario.js";

import RutaDash from "./routes.dash.js";
import routesProducts from "./routes.product.js";
import RutaFactura from "./routes.facturas.js";
const ruta = Router();
ruta.use("/", RutaUsuario);
ruta.use("/", RutaDash);
ruta.use("/",routesProducts)
ruta.use("/", RutaFactura)

export default ruta;

