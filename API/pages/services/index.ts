import type { IService } from './types';
import { servicesList } from '@/staticData/pages/services';

export const getAllServices = async (_filters?: any): Promise<IService[]> => servicesList;

export const getServiceById = async (id: number): Promise<IService | undefined> =>
  servicesList.find(s => s.id === id) ?? servicesList[0];