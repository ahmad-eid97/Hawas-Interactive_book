//== Handlers
import api from "../handlers";

export async function getLessonPages(endpoint: string) {
  const response = await api.GET(endpoint);
  if (response) return response;
}