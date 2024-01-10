import { cache } from 'react';
import API from "@/API/handlers";
//= Helpers
import { generateQuery, generateLanguageHeader, convertAboutDataArrayToObject } from '..';
//= Types
import type { AboutSectionData, PartnersDataResponse, TestimonialsDataResponse } from './types';
import type { Filters } from '@/types';


export const getAboutSection = cache(async () => {
  const response = await API.GET<AboutSectionData[]>(`/sections/about`, { headers: generateLanguageHeader() });
  return convertAboutDataArrayToObject(response?.data?.data as AboutSectionData[]);
});


export const getAllPartners = cache(async (filters?: Filters) => {
  const query = generateQuery(filters);

  const response = await API.GET<PartnersDataResponse>(`/partners${query ? query : ''}`, { headers: generateLanguageHeader() });
  return (response?.data?.data as PartnersDataResponse).partners;
});

export const getAllTestimonials = cache(async (filters?: Filters) => {
  const query = generateQuery(filters);

  const response = await API.GET<TestimonialsDataResponse>(`/testimonials${query ? query : ''}`, { headers: generateLanguageHeader() });
  return (response?.data?.data as TestimonialsDataResponse).testimonials;
});