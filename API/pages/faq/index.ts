import { cache } from 'react';
import API from "@/API/handlers";
//= Helpers
import { generateQuery } from '..';
//= Types
import type { FaqDataResponse } from './types';
import type { Filters } from '@/types';


export const getAllFaqs = cache(async (filters?: Filters) => {
  const query = generateQuery(filters);

  const response = await API.GET<FaqDataResponse>(`/faqs${query ? query : ''}`);
  return response;
});