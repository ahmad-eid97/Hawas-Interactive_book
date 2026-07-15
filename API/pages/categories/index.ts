import type { LibrayPageResponse, PlaysPageResponse, FilmsPageResponse, LecturesPageResponse, WorkshopsPageResponse, ICategory } from '@/types';
import {
  categoriesBySlug,
  libraryPageData,
  playsPageData,
  filmsPageData,
  lecturesPageData,
  workshopsPageData,
} from '@/staticData/pages/categories';

export const getCategoryBySlug = async (slug: string): Promise<ICategory | undefined> =>
  categoriesBySlug[slug];

export const getLibraryPageData = async (): Promise<LibrayPageResponse> => libraryPageData;

export const getPlaysPageData = async (): Promise<PlaysPageResponse> => playsPageData;

export const getFilmsPageData = async (): Promise<FilmsPageResponse> => filmsPageData;

export const getLecturesPageData = async (): Promise<LecturesPageResponse> => lecturesPageData;

export const getWorkshopsPageData = async (): Promise<WorkshopsPageResponse> => workshopsPageData;