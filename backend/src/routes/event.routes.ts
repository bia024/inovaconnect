import { Router } from 'express';
import { EventController } from '../controllers/event.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { eventValidator } from '../validators/event.validator.js';

export const eventRouter = Router();
const eventController = new EventController();

// Protege as rotas
eventRouter.use(authMiddleware);

// Rotas de Evento
eventRouter.post('/', validate(eventValidator), eventController.create);
eventRouter.get('/', eventController.getAll);