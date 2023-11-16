//== Handlers
import api from "../handlers";

export async function getLessonPages(lessonId: number) {
  const response = await api.GET(`/e-books/books/all_pages_by_lesson/${lessonId}`, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  });
  if (response) return response;
}