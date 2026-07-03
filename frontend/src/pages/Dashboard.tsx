// src/pages/Dashboard.tsx
import { useState } from 'react';
import { useEvents } from '../hooks/useEvents';
import { EventCard } from '../components/EventCard';
import { LoadSpinner } from '../components/UI/LoadSpinner';
import { Button } from '../components/UI/Button';
import { Input } from '../components/UI/Input';

export default function Dashboard() {
  const { events, createEvent, isLoading: isSaving } = useEvents();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ 
    title: '', description: '', date: '', location: '', organizer_id: 1 
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await createEvent(formData);
    if (success) {
      setIsModalOpen(false);
      setFormData({ title: '', description: '', date: '', location: '', organizer_id: 1 });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Eventos Disponíveis</h1>
        <Button onClick={() => setIsModalOpen(true)}>+ Criar Evento</Button>
      </div>

      {events.length === 0 && !isSaving ? (
        <p className="text-center text-slate-400">Nenhum evento encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      )}

      {/* Modal de Criação */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <form onSubmit={handleSubmit} className="bg-slate-800 p-6 rounded-xl w-96 flex flex-col gap-4 border border-slate-700">
            <h2 className="text-xl font-bold text-white">Novo Evento</h2>
            <Input label="Título" required onChange={e => setFormData({...formData, title: e.target.value})} />
            <Input label="Descrição" required onChange={e => setFormData({...formData, description: e.target.value})} />
            <Input label="Data" type="datetime-local" required onChange={e => setFormData({...formData, date: e.target.value})} />
            <Input label="Local" required onChange={e => setFormData({...formData, location: e.target.value})} />
            
            <div className="flex gap-2 mt-4">
              <Button type="submit" disabled={isSaving}>
                {isSaving ? "Salvando..." : "Salvar"}
              </Button>
              <Button variant="danger" type="button" onClick={() => setIsModalOpen(false)}>Cancelar</Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}