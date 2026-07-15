import type {
  MenuItem,
  Slider,
  ICategory,
  Course,
  IEvent,
  GalleryItem,
  GalleryCategory,
  Blog,
  FooterItem,
  FooterSocialLinks,
  SearchResponse,
} from '@/types';
import {
  menuItems,
  slider,
  categories,
  courses,
  events,
  galleries,
  galleryCategories,
  blogs,
  whyChooseUsData,
  countersData,
  experienceData,
  footerLinks,
  footerSocialLinks,
  settings,
  searchResponse,
} from '@/staticData/pages/home';


export const getAllMenus = async (): Promise<MenuItem[]> => menuItems;

export const getAllSliders = async (): Promise<Slider> => slider;

export const getAllCategories = async (_filters?: any): Promise<ICategory[]> => categories;

export const getAllCourses = async (_filters?: any): Promise<Course[]> => courses;

export const getAllEvents = async (_filters?: any): Promise<IEvent[]> => events;

export const getAllGalleries = async (_filters?: any): Promise<GalleryItem[]> => galleries;

export const getGalleryCategories = async (_filters?: any): Promise<GalleryCategory[]> => galleryCategories;

export const getAllBlogs = async (_filters?: any): Promise<Blog[]> => blogs;

export const getWhyChooseUsSection = async () => whyChooseUsData;

export const getExperinceSection = async () => experienceData;

export const getCounters = async () => countersData;

export const getFooterLinks = async (): Promise<FooterItem[]> => footerLinks;

export const getFooterSocialLinks = async (): Promise<FooterSocialLinks> => footerSocialLinks;

export const getAllSettings = async () => settings;

export const subscribeToNewsletter = async (_email: string) => ({
  success: true,
  message: 'تم الاشتراك بنجاح',
  data: null,
});

export const searchInDatabase = async (keyword: string): Promise<SearchResponse> => ({
  ...searchResponse,
  blogs: blogs.filter(b => b.title.includes(keyword)),
  categories: categories.filter(c => c.name.includes(keyword)),
  events: events.filter(e => e.title.includes(keyword)),
});