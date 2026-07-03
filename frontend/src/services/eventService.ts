import { api } from '../api/api';

export interface EventData {
  title: string;
  description: string;
  date: string;
  location: string;
  organizer_id: number;
}

export const eventService = {
  // Nome padronizado para "buscar todos"
  findAll: async () => {
    const { data } = await api.get('/events');
    return data;
  },
  
  // Nome padronizado para "criar"
  create: async (data: EventData) => {
    const { data: response } = await api.post('/events', data);
    return response;
  }
};