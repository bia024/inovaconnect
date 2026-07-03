import { api } from '../api/api';

export const authService = {
  async register(data: any) {
    const res = await api.post('/auth/register', data);
    return res.data;
  },
  
  async forgotPassword(email: string) {
    const res = await api.post('/auth/forgot-password', { email });
    return res.data;
  }
};