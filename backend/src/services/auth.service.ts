import bcrypt from 'bcrypt';
import type { UsersDTO } from '../entities/UsersDTO.js';

import { db } from '../database/connection.js'; 

export class AuthService {
  
  async registerUser(userData: Omit<UsersDTO, 'id' | 'created_at'>): Promise<any> {
    try {
      // 1. Verificar se o e-mail já existe na tabela 'users' usando o jv-noorm
      const userExists = await db.table('users').findOne({ email: userData.email });
      if (userExists) {
        throw new Error("Este e-mail já está cadastrado no sistema.");
      }

      // 2. Criptografar a senha por segurança
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

      // 3. Salvar o registro definitivo no MariaDB usando o ORM do desafio
      const createdUser = await db.table('users').insert({
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
        role: userData.role
      });

      return createdUser;

    } catch (error: any) {
      throw new Error(error.message || "Erro ao processar o cadastro no banco.");
    }
  }

  async loginUser(credentials: any) {
    // Faremos na sequência!
  }
}