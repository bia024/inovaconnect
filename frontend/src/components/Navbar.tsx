import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Importe o hook

export const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Pega a função logout do contexto

  const handleLogout = () => {
    logout(); // Chama a função que limpa o token e o estado do usuário
    navigate('/login');
  };

  return (
    <nav className="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center">
      <h1 className="text-xl font-bold text-emerald-400">InovaConnect</h1>
      <button 
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm transition"
      >
        Sair
      </button>
    </nav>
  );
};