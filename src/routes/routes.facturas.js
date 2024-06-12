import { Router } from "express";
import { ListarFactura } from "../controllers/controller.facturas.js";

const RutaFactura = Router();

RutaFactura.get("/factura", ListarFactura);

export default RutaFactura;