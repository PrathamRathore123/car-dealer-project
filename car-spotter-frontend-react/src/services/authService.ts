import api from './api';

export interface LoginResponse {
  token: string;
}

export async function login(username: string, password: string): Promise<void> {
  try {
    const response = await api.post<LoginResponse>('/login/', { username, password });
    localStorage.setItem('token', response.data.token);
  } catch (error) {
    throw error;
  }
}

export function logout(): void {
  localStorage.removeItem('token');
  window.location.href = '/login';
}
