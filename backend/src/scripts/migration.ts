import { createMigration } from 'jv-noorm';
import dotenv from 'dotenv';

// Carrega as variáveis do .env para o ORM saber os caminhos corretos
dotenv.config();

(async () => {
  await createMigration();
  process.exit(0);
})();