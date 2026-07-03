import { type Request, type Response, type NextFunction } from 'express-serve-static-core';
import jwt from 'jsonwebtoken';
// import { Request, Response, NextFunction } from 'express'; 

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  const token = authHeader.split(' ')[1]; // Formato esperado: "Bearer <token>"

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).user = decoded; // Injeta o usuário decodificado no objeto request
    next();
  } catch (error) {
    return res.status(403).json({ message: "Token inválido ou expirado" });
  }
};