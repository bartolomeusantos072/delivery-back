import {Router} from "express";
import {getEmpresa, errorEmpresa} from "../controllers/empresa-controller";
import {getCategories} from "../controllers/categories-controller";
import {getProducts} from "../controllers/products-controller";
const empresaRouter = Router();

empresaRouter
    .get("/",errorEmpresa)
    .get("/:empresaId", getEmpresa)
    .get("/:empresaId/categories", getCategories)
    .get("/:empresaId/categories/:categoriesId/products", getProducts)

export {empresaRouter};