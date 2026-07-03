// import { Navbar } from './Navbar';
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Crie o componente Navbar.tsx posteriormente */}
      <nav className="p-4 border-b border-slate-700">InovaConnect</nav> 
      <main className="p-8">
        {children}
      </main>
    </div>
  );
};