import { db } from '../config/database.js'; 

export class EventRepository {
  
  async findAll() {
    return await db.query({
      sql: "SELECT * FROM events",
      values: [],
      verboseHeader: "EventRepository.findAll"
    });
  }

  async create(data: any) {
    return await db.query({
      sql: "INSERT INTO events (title, description, date, location, organizer_id) VALUES (?, ?, ?, ?, ?)",
      values: [data.title, data.description, data.date, data.location, data.organizer_id],
      verboseHeader: "EventRepository.create"
    });
  }
}