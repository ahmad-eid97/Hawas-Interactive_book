import type { FAQItem } from './types';
import { faqsList } from '@/staticData/pages/faq';

export const getAllFaqs = async (_filters?: any): Promise<FAQItem[]> => faqsList;