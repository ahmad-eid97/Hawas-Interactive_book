export interface LibrayPageResponse {
  id: number;
  name: string;
  description: string;
  breadcrumb_title: string;
  breadcrumb_subtitle: string;
  slug: string;
  options: {
    title: string;
    link: string;
    author: string;
  }[];
  status: number;
  code: null;
}


export interface PlaysPageResponse {
  id: number;
  name: string;
  description: string;
  breadcrumb_title: string;
  breadcrumb_subtitle: string;
  slug: string;
  options: IPlay[];
  status: number;
  code: null;
}

export interface IPlay {
  title: string;
  description: string;
  image: string;
}


export interface FilmsPageResponse {
  id: number;
  name: string;
  description: string;
  breadcrumb_title: string;
  breadcrumb_subtitle: string;
  slug: string;
  options: {
    title: string;
    video: string;
    image: null;
  }[];
  status: number;
  code: null;
}


export interface LecturesPageResponse {
  id: number;
  name: string;
  description: string;
  breadcrumb_title: string;
  breadcrumb_subtitle: string;
  slug: string;
  options: {
    title: string;
    video: string;
    image: null;
  }[];
  status: number;
  code: null;
}


export interface WorkshopsPageResponse {
  id: number;
  name: string;
  description: string;
  breadcrumb_title: string;
  breadcrumb_subtitle: string;
  slug: string;
  options: {
    title: string;
    link: string;
  }[];
  status: number;
  code: null;
}