import dotenv from 'dotenv';
// import { createNoORMConnection } from 'jv-noorm';
import { createNoORMConnection } from '../lib/jv-noorm/src/index.js';

dotenv.config();

// O jv-noorm usa essa função para inicializar a conexão
export const db = createNoORMConnection({
  type: 'mariadb',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3307,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'inovaconnect',
});
