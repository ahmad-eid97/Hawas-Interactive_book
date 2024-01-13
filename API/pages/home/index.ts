import { cache } from 'react';
import API, { type Response } from "@/API/handlers";
//= Helpers
import { generateQuery, generateLanguageHeader, convertWhyChooseUsArrayToObject, convertCounterArrayToObject, convertExperienceDataArrayToObject, convertSettingsArrayToObject } from '..';
//= Types
import type {
  Filters,
  MenuItem,
  SlidersDataResponse,
  CategoriesDataResponse,
  CoursesDataResponse,
  EventsDataResponse,
  GalleriesDataResponse,
  BlogsDataResponse,
  FooterLinksResponse,
  NewsletterResponse,
  SettingsResponse,
  WhyChooseUsResponse,
  CounterItem,
  FooterSocialLinks,
  GalleriesCategoriesDataResponse,
  ExperienceSectionData,
  SearchResponse
} from '@/types';


export const getAllMenus = cache(async () => {
  const response = await API.GET<MenuItem[]>('/menus');
  return (response?.data?.data as MenuItem[]);
});


export const getAllSliders = cache(async (filters?: Filters) => {
  const query = generateQuery(filters);

  const response = await API.GET<SlidersDataResponse>(`/sliders${query ? query : ''}`, { headers: generateLanguageHeader() });


  return (response?.data?.data as SlidersDataResponse).sliders[0];
});


export const getAllCategories = cache(async (filters?: Filters) => {
  const query = generateQuery(filters);

  const response = await API.GET<CategoriesDataResponse>(`/categories${query ? query : ''}`, { headers: generateLanguageHeader() });
  return (response?.data?.data as CategoriesDataResponse).categories;
});


export const getAllCourses = cache(async (filters?: Filters) => {
  const query = generateQuery(filters);

  const response = await API.GET<CoursesDataResponse>(`/courses${query ? query : ''}`, { headers: generateLanguageHeader() });
  return (response?.data?.data as CoursesDataResponse).courses;
});


export const getAllEvents = cache(async (filters?: Filters) => {
  const query = generateQuery(filters);

  const response = await API.GET<EventsDataResponse>(`/events${query ? query : ''}`, { headers: generateLanguageHeader() });
  return (response?.data?.data as EventsDataResponse).events;
});


export const getAllGalleries = cache(async (filters?: Filters) => {
  const query = generateQuery(filters);

  const response = await API.GET<GalleriesDataResponse>(`/galleries${query ? query : ''}`, { headers: generateLanguageHeader() });
  return (response?.data?.data as GalleriesDataResponse).galleries;
});


export const getGalleryCategories = cache(async (filters?: Filters) => {
  const query = generateQuery(filters);

  const response = await API.GET<GalleriesCategoriesDataResponse>(`/galleryCategories${query ? query : ''}`, { headers: generateLanguageHeader() });
  return (response?.data?.data as GalleriesCategoriesDataResponse).categories;
});


export const getAllBlogs = cache(async (filters?: Filters) => {
  const query = generateQuery(filters);

  const response = await API.GET<BlogsDataResponse>(`/blogs${query ? query : ''}`, { headers: generateLanguageHeader() });
  return (response?.data?.data as BlogsDataResponse).blogs;
});


export const getWhyChooseUsSection = cache(async () => {
  const response = await API.GET<WhyChooseUsResponse[]>(`/sections/why_choose_us`, { headers: generateLanguageHeader() });
  return convertWhyChooseUsArrayToObject(response?.data?.data as WhyChooseUsResponse[]);
});


export const getExperinceSection = cache(async () => {
  const response = await API.GET<ExperienceSectionData[]>(`/sections/experience`, { headers: generateLanguageHeader() });
  return convertExperienceDataArrayToObject(response?.data?.data as ExperienceSectionData[]);
});


export const getCounters = cache(async () => {
  const response = await API.GET<CounterItem[]>(`/sections/counter_success`, { headers: generateLanguageHeader() });
  return convertCounterArrayToObject(response?.data?.data as CounterItem[]);
});


export const getFooterLinks = cache(async () => {
  const response = await API.GET<FooterLinksResponse>(`/footer/useful-links`, { headers: generateLanguageHeader() });
  return (response?.data?.data as FooterLinksResponse).data;
});


export const getFooterSocialLinks = cache(async () => {
  const response = await API.GET<FooterSocialLinks>(`/footer/1`, { headers: generateLanguageHeader() });
  return (response?.data?.data as FooterSocialLinks);
});


export const getAllSettings = cache(async () => {
  const response = await API.GET<SettingsResponse[]>(`/settings`, { headers: generateLanguageHeader() });
  return convertSettingsArrayToObject(response?.data?.data as SettingsResponse[]);
});


export const subscribeToNewsletter = cache(async (email: string) => {
  const response = await API.POST<Response<NewsletterResponse>>(`/newsletter`, { body: { email } });
  return response.data;
});


export const searchInDatabase = cache(async (keyword: string) => {
  const response = await API.GET<SearchResponse>(`/search?keyword=${keyword}`, { headers: generateLanguageHeader() });
  return response?.data?.data as SearchResponse;
});