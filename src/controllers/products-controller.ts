import { Request, Response } from "express";
import { notFoundError } from "../errors/not-found-error";
import httpStatus from "http-status";
import productsService from "../services/products-service";

export async function getProducts(req: Request, res: Response) {
   
    const { empresaId } = req.params;
    if(!empresaId || Number(empresaId)<=0){
        throw notFoundError();
    }
    const { categoriesId } = req.params;
    if(!categoriesId || Number(categoriesId)<=0){
        throw notFoundError();
    }

    try {
        const products = await productsService.getProducts(Number(empresaId), Number(categoriesId));
        return res.status(httpStatus.OK).send(products);
    } catch (error: any ) {
        if(error.name ==="NotFoundError"){
            return res.sendStatus(httpStatus.NOT_FOUND);
        }
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

