import { notFoundError } from "../errors/not-found-error";
import empresaRepository from "../repositories/empresa-repository";

async function getEmpresa(empresaId: number){

    const findEmpresa = await empresaRepository.findEmpresaById(empresaId);
    if(!findEmpresa) {
        throw notFoundError();
    }

    return findEmpresa;
}

const empresaService = {
    getEmpresa
}
export default empresaService;