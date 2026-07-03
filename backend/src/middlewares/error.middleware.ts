import type { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("🔥 Erro capturado pelo middleware:", err);
  
  // O middleware decide: se o erro veio com status, usa ele. Se não, é 500 (Erro interno)
  const status = err.status || 500;
  const message = err.message || "Erro interno do servidor";
  
  res.status(status).json({ message });
};