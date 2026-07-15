// Static data for e-books, books, lessons, and games
// Since the backend is offline, all user-specific operations return empty/null

export const booksList: any[] = [];

export const lessonsList: any[] = [];

export const gamesList: any[] = [];

export const emptyHighlights = {
  success: true,
  highlights: {
    current_page: 1,
    data: [],
    first_page_url: '',
    from: 0,
    last_page: 1,
    last_page_url: '',
    links: [],
    next_page_url: null,
    path: '',
    per_page: 15,
    prev_page_url: null,
    to: 0,
    total: 0,
  },
};

export const emptyNotesList: any[] = [];

export const emptyQuizzesList = {
  data: [],
  current_page: 1,
  last_page: 1,
  per_page: 10,
  total: 0,
};

export const emptySchoolsList = {
  success: true,
  data: [],
};

export const emptyClassesList = {
  success: true,
  data: [],
};
