import { Request, Response } from "express";
import { notFoundError } from "../errors/not-found-error";
import httpStatus from "http-status";
import empresaService from "../services/empresa-service";

export async function getEmpresa(req: Request, res: Response) {
   
    const { empresaId } = req.params;
    if(!empresaId || Number(empresaId)<=0){
        throw notFoundError();
    }

    try {
        const empresa = await empresaService.getEmpresa(Number(empresaId));
        return res.status(httpStatus.OK).send(empresa);
    } catch (error: any ) {
        if(error.name ==="NotFoundError"){
            return res.sendStatus(httpStatus.NOT_FOUND);
        }
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

export async function errorEmpresa(req: Request, res: Response) {
    return res.status(httpStatus.NOT_FOUND).send({
        message: "A página solicitada não foi encontrada.",
      });
}