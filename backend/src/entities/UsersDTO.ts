// Exemplo de como a entidade deve ser estruturada profissionalmente
export interface UserDTO {
  id?: number;
  nome: string;
  email: string;
  senha: string; // Nota: Em produção, sempre armazene o hash (bcrypt)
  tipo: 'organizador' | 'participante';
}