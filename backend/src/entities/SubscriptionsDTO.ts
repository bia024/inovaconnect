export interface SubscriptionsDTO {
  id: number;
  user_id: number;
  event_id: number;
  subscription_date?: Date;
  status: string;
}
