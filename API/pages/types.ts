export interface Links {
  first: string;
  last: string;
  prev: null;
  next: null;
}

export interface Meta {
  current_page: number;
  from: null;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: null;
  total: number;
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}

export interface Filters {
  limit?: number;
  skip?: number;
}