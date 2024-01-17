import { cache } from 'react';
import API from "@/API/handlers";
//= Types
import type { LibrayPageResponse, PlaysPageResponse, FilmsPageResponse, LecturesPageResponse, WorkshopsPageResponse } from '@/types';


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