
import { Connection } from 'mysql2/promise';
import { getConnection } from '../config/database';

async function findCategoriesById(id: number) {
  const connection: Connection = await getConnection();
  try {
    const query = `SELECT categorias.*  FROM categorias JOIN empresa_categoria on empresa_categoria.categoria_id = categorias.id WHERE empresa_categoria.empresa_id=?`;
    const categories= await connection.query(query, [id]);
    return categories[0]
  } catch (error: any) {
    throw new Error(`Erro ao buscar categories por ID: ${error.message}`);
  }
}

const categoriesRepository = {
    findCategoriesById
}

export default categoriesRepository;