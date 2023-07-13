
import { Connection } from 'mysql2/promise';
import { getConnection } from '../config/database';

async function findProductsById(empresaId: number, categoriesId: number) {
  const connection: Connection = await getConnection();
  try {
    const query = `SELECT categorias.nome as categoria, produtos.*  FROM produtos JOIN categorias on categorias.id =produtos.categoria_id  JOIN empresa_categoria ON produtos.categoria_id = empresa_categoria.categoria_id WHERE empresa_categoria.empresa_id=? AND empresa_categoria.categoria_id=?`;
    const categories= await connection.query(query, [empresaId, categoriesId]);
    return categories[0]
  } catch (error: any) {
    throw new Error(`Erro ao buscar categories por ID: ${error.message}`);
  }
}

const categoriesRepository = {
    findProductsById
}

export default categoriesRepository;