import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { Button } from '../components/UI/Button';
import { Input } from '../components/UI/Input';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Chama o serviço que configuramos anteriormente
      await authService.forgotPassword(email);
      alert("Se o e-mail estiver cadastrado, você receberá um link de recuperação.");
      navigate('/login');
    } catch (err) {
      alert("Ocorreu um erro ao tentar recuperar a senha. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-slate-800 p-8 rounded-lg shadow-xl border border-slate-700">
        <h2 className="text-2xl font-bold text-white mb-2">Recuperar Senha</h2>
        <p className="text-slate-400 text-sm mb-6">
          Insira seu e-mail e enviaremos as instruções.
        </p>
        
        <Input 
          label="E-mail" 
          type="email" 
          required 
          onChange={(e) => setEmail(e.target.value)} 
        />
        
        <div className="mt-6 flex flex-col gap-3">
          <Button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar instruções"}
          </Button>
          <Button 
            variant="danger" 
            type="button" 
            onClick={() => navigate('/login')}
          >
            Voltar ao Login
          </Button>
        </div>
      </form>
    </div>
  );
}