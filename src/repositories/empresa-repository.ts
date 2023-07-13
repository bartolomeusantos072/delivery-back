
import { Connection } from 'mysql2/promise';
import { getConnection } from '../config/database';

async function findEmpresaById(id: number) {
  const connection: Connection = await getConnection();
  try {
    const query = `SELECT * FROM empresa JOIN endereco JOIN forma_pagamento JOIN horario_atendimento WHERE empresa.id = ?`;
    const empresa= await connection.query(query, [id]);
    return empresa[0]
  } catch (error: any) {
    throw new Error(`Erro ao buscar empresa por ID: ${error.message}`);
  }
}

const empresaRepository = {
    findEmpresaById
}

export default empresaRepository;