import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email("Formato de e-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const result = loginSchema.safeParse({ email, password });
    
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    try {
      await login({ email, password });
      navigate('/dashboard');
    } catch (err: any) {
      setError('E-mail ou senha incorretos.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-slate-800 p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-6">Login - InovaConnect</h2>
        
        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
        
        <input 
          type="email" 
          placeholder="E-mail"
          className="w-full p-3 mb-4 rounded bg-slate-700 text-white outline-none focus:ring-2 focus:ring-emerald-500"
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Senha"
          className="w-full p-3 mb-6 rounded bg-slate-700 text-white outline-none focus:ring-2 focus:ring-emerald-500"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button 
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-600 p-3 rounded font-bold text-white transition"
        >
          Entrar
        </button>

        <div className="mt-6 text-center text-sm">
          <button 
            type="button" 
            onClick={() => navigate('/forgot-password')}
            className="text-emerald-400 hover:underline"
          >
            Esqueceu a senha?
          </button>
          <span className="text-slate-500 mx-2">|</span>
          <button 
            type="button" 
            onClick={() => navigate('/register')}
            className="text-emerald-400 hover:underline"
          >
            Cadastre-se
          </button>
        </div>

        <div style={{ display: 'none' }}>
          Código criado com café e persistência
        </div>
      </form>
    </div>
  );
}