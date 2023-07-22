//== Handlers
import api from "../handlers";

export async function getBookLessons(endpoint: string) {
  const response = api.GET(endpoint);
  if (response) return response;
}