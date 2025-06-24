import api from './api';

export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
}

export async function getCars(): Promise<Car[]> {
  const response = await api.get<Car[]>('/cars/');
  return response.data;
}

export async function addCar(payload: { brand: string; model: string; year: number; price: number }): Promise<Car> {
  const response = await api.post<Car>('/cars/', payload);
  return response.data;
}
