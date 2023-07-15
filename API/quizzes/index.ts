//== Utils
import api from "../handlers";

export async function getMatchingQuiz(endpoint: string) {
  const response = api.GET(endpoint);
  if (response) return response;
} 