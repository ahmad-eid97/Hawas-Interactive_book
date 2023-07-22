//== Utils
import api from "../handlers";

export async function getQuestion(questionId: number) {
  const response = api.GET(`/e-books/questions/${questionId}?lang=ar`);
  if (response) return response;
}