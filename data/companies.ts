import { api } from '@/services/api';
import { Companies, Company } from '@/types';

export async function fetchCompanies(): Promise<Companies | null> {
  try {
    const response = await api.get('/companies');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export async function fetchCompanyById(id: number): Promise<Company | null> {
  try {
    const response = await api.get(`/companies/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
