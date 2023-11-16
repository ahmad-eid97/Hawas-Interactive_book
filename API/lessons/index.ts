//== Handlers
import api from "../handlers";

export async function getBookLessons(bookId: number) {
  const response = await api.GET(`/e-books/books/all_lessons_by_book/${bookId}`);
  if (response.data.success) return response.data.data.data;
}