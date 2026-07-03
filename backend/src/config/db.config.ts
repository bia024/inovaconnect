import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  DB_HOST: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_DATABASE: z.string(),
  PORT: z.string().default('3001'),
});

// Valida o processo. Se faltar alguma variável, ele joga um erro e trava o servidor
export const env = envSchema.parse(process.env);