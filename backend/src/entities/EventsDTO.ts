export interface EventsDTO {
  id?: number;
  title: string;
  description?: string;
  date: Date | string;
  location: string;
  organizer_id: number;
}