import type { AboutSectionData, CounterItem, CounterValueElement, ExperienceSectionData, SettingsResponse, WhyChooseUsResponse } from '@/types';
import type { Filters } from './types';

export * from './about';
export * from './contact';
export * from './home';
export * from './faq';
export * from './services';
export * from './blog';
export * from './terms';
export * from './privacy';

export function generateQuery(filters: Filters | undefined) {
  let query = '';
  if (filters && Object.keys(filters).length) {
    query = '?';
    Object.entries(filters).forEach(([key, value]) => query += `${key}=${value}&`);
    query = query.slice(0, -1);
  }

  return query;
}

export function generateLanguageHeader() {
  return {
    "Accept-Language": "ar"
  }
}

export function convertWhyChooseUsArrayToObject(data: WhyChooseUsResponse[]) {
  if (!data || !data.length) return {
    title: '',
    videoLink: '',
    description: '',
    bgImage: ''
  };

  return {
    title: data.find(item => item.key === 'why_choose_us_title')?.value,
    videoLink: data.find(item => item.key === 'why_choose_us_sub_title')?.value,
    description: data.find(item => item.key === 'why_choose_us_description')?.value,
    bgImage: data.find(item => item.key === 'why_choose_us_image')?.value
  }
}

export function convertCounterArrayToObject(data: CounterItem[]) {
  if (!data || !data.length) return {
    title: '',
    sub_title: '',
    list: []
  };

  return {
    title: data.find(item => item.key === 'counter_success_title')?.value,
    sub_title: data.find(item => item.key === 'counter_success_sub_title')?.value,
    list: data.find(item => item.key === 'counter_success_list')?.value as CounterValueElement[]
  }
}

export function convertExperienceDataArrayToObject(data: ExperienceSectionData[]) {
  if (!data || !data.length) return {
    title: '',
    description: '',
    image: ''
  };

  return {
    title: data.find(item => item.key === 'experience_title')?.value,
    description: data.find(item => item.key === 'experience_description')?.value,
    image: data.find(item => item.key === 'experience_image')?.value,
  }
}

export function convertAboutDataArrayToObject(data: AboutSectionData[]) {
  if (!data || !data.length) return {
    title: '',
    sub_title: '',
    description: ''
  };

  return {
    title: data.find(item => item.key === 'about_title')?.value,
    sub_title: data.find(item => item.key === 'about_sub_title')?.value,
    description: data.find(item => item.key === 'about_description')?.value,
  }
}


export function convertSettingsArrayToObject(data: SettingsResponse[]) {
  if (!data || !data.length) return {
    logo: '',
    email: '',
    name: '',
    contact_phone: '',
    contact_address: '',
    facebook_url: '',
    twitter_url: '',
    instagram_url: '',
    youtube_url: ''
  };

  return {
    logo: data.find(item => item.key === 'logo')?.plain_value,
    email: data.find(item => item.key === 'email')?.plain_value,
    name: data.find(item => item.key === 'application_name')?.plain_value,
    contact_phone: data.find(item => item.key === 'contact_phone')?.plain_value,
    contact_address: data.find(item => item.key === 'contact_address')?.plain_value,
    facebook_url: data.find(item => item.key === 'facebook_url')?.plain_value,
    twitter_url: data.find(item => item.key === 'twitter_url')?.plain_value,
    instagram_url: data.find(item => item.key === 'instagram_url')?.plain_value,
    youtube_url: data.find(item => item.key === 'youtube_url')?.plain_value
  }
}


