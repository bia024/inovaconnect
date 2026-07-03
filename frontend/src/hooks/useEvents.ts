import { useState, useEffect } from 'react';
import { eventService, type EventData } from '../services/eventService';

export const useEvents = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchEvents = async () => {
    setIsLoading(true); // Adicionamos o loading aqui também
    try {
      // Agora usamos findAll(), que existe no nosso serviço
      const data = await eventService.findAll();
      setEvents(data);
    } catch (error) {
      console.error("Erro ao buscar eventos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const createEvent = async (data: EventData) => {
    setIsLoading(true);
    try {
      // Agora usamos create(), que existe no nosso serviço
      await eventService.create(data);
      await fetchEvents(); 
      return true;
    } catch (error) {
      console.error("Erro ao criar evento:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return { events, createEvent, isLoading };
};