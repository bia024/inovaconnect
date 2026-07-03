import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { authService } from '../services/authService';
import { Button } from '../components/UI/Button';
import { Input } from '../components/UI/Input';

const registerSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Formato de e-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validação com Zod
    const result = registerSchema.safeParse(formData);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    try {
      await authService.register(formData);
      alert("Cadastro realizado com sucesso!");
      navigate('/login');
    } catch (err) {
      setError("Erro ao cadastrar. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-4">
      <form onSubmit={handleRegister} className="w-full max-w-sm bg-slate-800 p-8 rounded-lg shadow-xl border border-slate-700 flex flex-col gap-4">
        <h2 className="text-white text-2xl font-bold mb-4">Criar Conta</h2>
        
        {error && <p className="text-red-400 text-sm">{error}</p>}
        
        <Input 
          label="Nome" 
          value={formData.name}
          onChange={e => setFormData({...formData, name: e.target.value})} 
        />
        <Input 
          label="E-mail" 
          type="email" 
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})} 
        />
        <Input 
          label="Senha" 
          type="password" 
          value={formData.password}
          onChange={e => setFormData({...formData, password: e.target.value})} 
        />
        
        <div className="flex flex-col gap-2 mt-2">
          <Button type="submit">Cadastrar</Button>
          <Button variant="danger" type="button" onClick={() => navigate('/login')}>
            Voltar
          </Button>
        </div>
      </form>
    </div>
  );
}