export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-400 font-medium">
          © 2026 InovaConnect - Bianca C. dos Reis
        </p>
        <p className="text-slate-600 text-xs mt-2">
          Este projeto foi desenvolvido por Bianca C. dos Reis como parte do processo seletivo para estágio Fullstack
        </p>
        <div className="mt-4 inline-block bg-slate-800 px-3 py-1 rounded-full text-slate-500 text-xs font-mono">
          ORM: JVNOORM v0.1.0
        </div>
      </div>
    </footer>
  );
};