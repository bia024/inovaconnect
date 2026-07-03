import { z } from 'zod';
// app.use(errorMiddleware);

export const eventValidator = z.object({
  title: z.string().min(3),
  description: z.string().max(500),
  date: z.string(), 
  location: z.string().min(3, "A localização é obrigatória"), 
  organizer_id: z.number().int()
});