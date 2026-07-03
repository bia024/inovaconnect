import { createNoORMConnection } from 'jv-noorm';
import dotenv from 'dotenv';

dotenv.config();

export const db = createNoORMConnection();

export async function testConnection() {
  try {
    await db.connect();
    console.log('⚡ Conexão com o MariaDB estabelecida com sucesso!');
  } catch (error) {
    console.error('❌ Falha ao conectar o JV-NoORM no banco:', error);
    process.exit(1);
  }
}