import { notFoundError } from "../errors/not-found-error";
import categoriesRepository from "../repositories/categories-repository";

async function getCategories(empresaId: number){

    const findCategories = await categoriesRepository.findCategoriesById(empresaId);
    if(!findCategories) {
        throw notFoundError();
    }

    return findCategories;
}

const categoriesService = {
    getCategories
}
export default categoriesService;