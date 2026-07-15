import type { TermsData } from './types';
import { termsData } from '@/staticData/pages/legal';

export const getTerms = async (): Promise<TermsData> => termsData;