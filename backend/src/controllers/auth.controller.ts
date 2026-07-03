import type { Request, Response } from 'express';
import { registerValidator, loginValidator } from '../validators/auth.validator.js';
import { AuthService } from '../services/auth.service.js';

export class AuthController {
  private authService = new AuthService();

  async register(req: Request, res: Response): Promise<Response> {
    try {
      const validatedData = registerValidator.parse(req.body);
      const newUser = await this.authService.registerUser(validatedData);
      
      return res.status(201).json({
        message: "Usuário cadastrado com sucesso!",
        data: { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role }
      });
    } catch (error: any) {
      if (error.errors) {
        return res.status(400).json({ message: "Erro de validação", errors: error.errors });
      }
      return res.status(400).json({ message: error.message || "Erro ao cadastrar" });
    }
  }

  async login(req: Request, res: Response): Promise<Response> {
    try {
      const validatedData = loginValidator.parse(req.body);
      const authResult = await this.authService.authenticateUser(
        validatedData.email, 
        validatedData.password
      );
      
      return res.status(200).json(authResult);
    } catch (error: any) {
      return res.status(401).json({ message: error.message || "Erro no login" });
    }
  }
}
