import mysql, { Connection } from 'mysql2/promise';
import config from './config';

let connection: Connection | null = null;

export async function connectDB(): Promise<void> {
  connection = await mysql.createConnection(config);
  console.log('Conexão estabelecida com sucesso!');
}

export function getConnection(): Connection {
  if (!connection) {
    throw new Error('Conexão com o banco de dados não foi estabelecida');
  }
  return connection;
}

export async function disconnectDB(): Promise<void> {
  if (connection) {
    await connection.end();
    console.log('Conexão com o banco de dados fechada com sucesso!');
  }
}
