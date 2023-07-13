import { notFoundError } from "../errors/not-found-error";
import productsRepository from "../repositories/products-repository";

async function getProducts(empresaId: number, categoriesId: number){

    const findProducts = await productsRepository.findProductsById(empresaId, categoriesId);
    if(!findProducts) {
        throw notFoundError();
    }

    return findProducts;
}

const categoriesService = {
    getProducts
}
export default categoriesService;