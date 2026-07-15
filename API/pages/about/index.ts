import type { Testimonial } from './types';
import { aboutSection, testimonials } from '@/staticData/pages/about';

export const getAboutSection = async () => aboutSection;

export const getAllTestimonials = async (_filters?: any): Promise<Testimonial[]> => testimonials;