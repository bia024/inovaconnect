interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  onSubscribe?: () => void;
}

export const EventCard = ({ title, description, date, location, onSubscribe }: EventCardProps) => (
  <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 shadow-lg hover:shadow-emerald-900/20">
    <h3 className="text-white text-xl font-bold mb-2 truncate">{title}</h3>
    <p className="text-slate-400 text-sm mb-4 line-clamp-2 h-10">{description}</p>
    
    <div className="space-y-2 mb-6">
      <div className="flex items-center text-emerald-400 text-xs font-mono">
        <span className="mr-2">📅</span> {new Date(date).toLocaleDateString()}
      </div>
      <div className="flex items-center text-slate-400 text-xs">
        <span className="mr-2">📍</span> {location}
      </div>
    </div>

    <button 
      onClick={onSubscribe}
      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 rounded-lg transition-colors"
    >
      Inscrever-se
    </button>
  </div>
);