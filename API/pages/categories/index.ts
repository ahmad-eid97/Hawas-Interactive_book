import { cache } from 'react';
import API from "@/API/handlers";
//= Utils
import { generateLanguageHeader } from '..';
//= Types
import type { LibrayPageResponse, PlaysPageResponse, FilmsPageResponse, LecturesPageResponse, WorkshopsPageResponse, ICategory } from '@/types';


export const getCategoryBySlug = cache(async (slug: string) => {
  const response = await API.GET<ICategory>(`/categories/${slug}/slug`, { headers: generateLanguageHeader() });
  return (response?.data?.data as ICategory);
});

export const getLibraryPageData = cache(async () => {
  const response = await API.GET<LibrayPageResponse>(`/pages/5`, { headers: { 'Accept-Language': 'ar' } });
  return (response.data.data as LibrayPageResponse);
});


export const getPlaysPageData = cache(async () => {
  const response = await API.GET<PlaysPageResponse>(`/pages/6`, { headers: { 'Accept-Language': 'ar' } });
  return (response.data.data as PlaysPageResponse);
});


export const getFilmsPageData = cache(async () => {
  const response = await API.GET<FilmsPageResponse>(`/pages/7`, { headers: { 'Accept-Language': 'ar' } });
  return (response.data.data as FilmsPageResponse);
});


export const getLecturesPageData = cache(async () => {
  const response = await API.GET<LecturesPageResponse>(`/pages/8`, { headers: { 'Accept-Language': 'ar' } });
  return (response.data.data as LecturesPageResponse);
});


export const getWorkshopsPageData = cache(async () => {
  const response = await API.GET<WorkshopsPageResponse>(`/pages/9`, { headers: { 'Accept-Language': 'ar' } });
  return (response.data.data as WorkshopsPageResponse);
});