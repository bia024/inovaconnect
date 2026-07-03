import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { testConnection } from './config/database.js';
import { errorMiddleware } from './middlewares/error.middleware.js';
import authRouter from './routes/auth.routes.js';
import { eventRouter } from './routes/event.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use('/auth', authRouter);
app.use('/events', eventRouter);

// Middleware de Erro (ÚLTIMO!)
app.use(errorMiddleware);

async function startServer() {
  await testConnection();
  app.listen(process.env.PORT || 3001, () => {
    console.log(`🚀 Servidor rodando na porta ${process.env.PORT || 3001}`);
  });
}

startServer();