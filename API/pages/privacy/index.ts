import { cache } from 'react';
import API from "@/API/handlers";
//= Types
import type { PrivacyData } from './types';

export const getPrivacy = cache(async () => {
  const response = await API.GET<PrivacyData>('pages/3', { headers: { 'Accept-Language': 'ar' } });
  return (response.data.data as PrivacyData);
});