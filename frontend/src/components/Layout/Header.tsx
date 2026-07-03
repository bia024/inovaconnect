import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold text-emerald-500 tracking-tight">
          Inova<span className="text-white">Connect</span>
        </Link>
        
        <nav className="flex items-center gap-6">
          {user ? (
            <>
              <span className="text-slate-400 text-sm">Olá, {user.name}</span>
              <button 
                onClick={handleLogout} 
                className="text-red-400 hover:text-red-300 text-sm font-medium transition"
              >
                Sair
              </button>
            </>
          ) : (
            <Link to="/login" className="bg-emerald-600 px-4 py-2 rounded-lg text-white font-medium hover:bg-emerald-500 transition">
              Entrar
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};