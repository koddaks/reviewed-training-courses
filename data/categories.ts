import { api } from '@/services/api';
import { Categories } from '@/types';

export async function fetchAllCategories(): Promise<Categories | null> {
  try {
    const response = await api.get('/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
