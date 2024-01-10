import { cache } from 'react';
import API from "@/API/handlers";
//= Helpers
import { generateQuery } from '..';
//= Types
import type { ServicesDataResponse } from './types';
import type { Filters } from '@/types';


export const getAllServices = cache(async (filters?: Filters) => {
  const query = generateQuery(filters);

  const response = await API.GET<ServicesDataResponse>(`/services${query ? query : ''}`);
  return response;
});