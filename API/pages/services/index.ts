import { cache } from 'react';
import API from "@/API/handlers";
//= Helpers
import { generateQuery } from '..';
//= Types
import type { IService, ServicesDataResponse } from './types';
import type { Filters } from '@/types';


export const getAllServices = cache(async (filters?: Filters) => {
  const query = generateQuery(filters);

  const response = await API.GET<ServicesDataResponse>(`/services${query ? query : ''}`, { headers: { 'Accept-Language': 'ar' } });
  return (response.data.data as ServicesDataResponse).services;
});


export const getServiceById = cache(async (id: number) => {
  const response = await API.GET<IService>(`/services/${id}`, { headers: { 'Accept-Language': 'ar' } });
  return (response.data.data as IService);
});