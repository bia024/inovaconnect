import { db } from '../config/database.js';
import { type EventsDTO } from '../entities/EventsDTO.js';

export class EventService {
  // Mudamos o nome para findAll para ficar consistente
  async findAll(): Promise<EventsDTO[]> {
    // Usando o formato exigido pelo JVNOORM
    const result = await (db as any).query({
      sql: "SELECT * FROM events",
      values: [],
      verboseHeader: "EventService.findAll"
    });
    return result as EventsDTO[];
  }

  async create(data: EventsDTO) {
    return await (db as any).query({
      sql: "INSERT INTO events (title, description, date, organizer_id) VALUES (?, ?, ?, ?)",
      values: [data.title, data.description, data.date, data.organizer_id],
      verboseHeader: "EventService.create"
    });
  }
}