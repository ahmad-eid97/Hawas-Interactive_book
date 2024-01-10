import { cache } from 'react';
import API from "@/API/handlers";
//= Types
import type { TermsData } from './types';

export const getTerms = cache(async () => {
  const response = await API.GET<TermsData>('pages/4', { headers: { 'Accept-Language': 'ar' } });
  return (response.data.data as TermsData);
});