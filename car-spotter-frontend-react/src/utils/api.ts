import api from '@/services/api';
import axios from 'axios';
export const setAuthToken = (token: string) => {
  localStorage.setItem('token', token);
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const removeAuthToken = () => {
  localStorage.removeItem('token');
  delete api.defaults.headers.common['Authorization'];
};

export interface Car {
  id?: number;
  brand: string;
  model: string;
  year: number;
  price: number;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user?: any;
}

export const loginUser = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  try {
    const response = await api.post<LoginResponse>('/login/', credentials);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error(error.response.data?.detail || 'Invalid username or password');
      }
      throw new Error(`Login failed: ${error.response?.statusText || 'Unexpected error'}`);
    }
    throw new Error('An unexpected error occurred');
  }
};

export const fetchCars = async (): Promise<Car[]> => {
  const response = await api.get<Car[]>('/cars/');
  return response.data;
};

export const addCar = async (car: Omit<Car, 'id'>): Promise<Car> => {
  const response = await api.post<Car>('/cars/', car);
  return response.data;
};
