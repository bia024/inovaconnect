import { z } from 'zod';

// Validação rigorosa para o Cadastro de Usuários (POST /auth/register)
export const registerValidator = z.object({
  name: z
    .string({ message: "O nome é obrigatório" })
    .trim()
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
  
  email: z
    .string({ message: "O e-mail é obrigatório" })
    .trim()
    .email("Insira um formato de e-mail válido"), // String direta para evitar o @deprecated
  
  password: z
    .string({ message: "A senha é obrigatória" })
    .min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
  
  // Usando EXATAMENTE a propriedade "message" que a assinatura do erro liberou
  role: z.enum(['organizer', 'participant'], {
    message: "O tipo de usuário deve ser estritamente 'organizer' ou 'participant'"
  })
});

// Validação rigorosa para o Login (POST /auth/login)
export const loginValidator = z.object({
  email: z
    .string({ message: "O e-mail é obrigatório" })
    .trim()
    .email("Insira um formato de e-mail válido"), // String direta para evitar o @deprecated
  
  password: z
    .string({ message: "A senha é obrigatória" })
    .min(1, { message: "A senha não pode estar em branco" })
});