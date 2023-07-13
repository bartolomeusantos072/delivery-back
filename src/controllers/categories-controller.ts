import { Request, Response } from "express";
import { notFoundError } from "../errors/not-found-error";
import httpStatus from "http-status";
import categoriesService from "../services/categories-service";

export async function getCategories(req: Request, res: Response) {
   
    const { empresaId } = req.params;
    if(!empresaId || Number(empresaId)<=0){
        throw notFoundError();
    }

    try {
        const categories = await categoriesService.getCategories(Number(empresaId));
        return res.status(httpStatus.OK).send(categories);
    } catch (error: any ) {
        if(error.name ==="NotFoundError"){
            return res.sendStatus(httpStatus.NOT_FOUND);
        }
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

