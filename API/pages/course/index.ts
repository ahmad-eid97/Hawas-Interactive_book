import { cache } from 'react';
import API from "@/API/handlers";
//= Types
import type { ICourse } from '@/types';


export const getCourseById = cache(async (id: number) => {
  const response = await API.GET<ICourse>(`/courses/${id}`, { headers: { 'Accept-Language': 'ar' } });
  return (response.data.data as ICourse);
});