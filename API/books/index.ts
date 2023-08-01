//== Modules
import api from "../handlers";

export async function getBooks() {
  const response = await api.GET(`/e-books/books`);
  if (response.data.success) return response.data.data;
}