import type { PrivacyData } from './types';
import { privacyData } from '@/staticData/pages/legal';

export const getPrivacy = async (): Promise<PrivacyData> => privacyData;