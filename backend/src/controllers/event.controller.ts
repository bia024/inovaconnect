import type { Request, Response, NextFunction } from 'express';
import { EventService } from '../services/event.service.js';

export class EventController {
  private eventService = new EventService();

  getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const events = await this.eventService.findAll();
      res.status(200).json(events);
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const result = await this.eventService.create(req.body);
      res.status(201).json({ message: "Evento criado com sucesso!", data: result });
    } catch (error) {
      next(error);
    }
  };
}