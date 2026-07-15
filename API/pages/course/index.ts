import type { ICourse } from '@/types';
import { coursesList } from '@/staticData/pages/courses';

export const getCourseById = async (id: number): Promise<ICourse | undefined> =>
  coursesList.find(c => c.id === id) ?? coursesList[0];