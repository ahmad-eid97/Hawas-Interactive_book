//== Utils
import api from "../handlers";

export async function getQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  if (response) return response;
}

export async function getQuestionImageWithPosition(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  const questionImage = response?.data?.data?.question_img;
  const choices = response?.data?.data?.answers?.map((item: any) => ({ id: item.id, title: item.title, image: item.answer_img }));
  const droppables = response?.data?.data?.answers?.map((item: any) => ({ id: item.id, left: item.answer_two_gap_match?.split(",")[0], top: item.answer_two_gap_match?.split(",")[1] }));
  let answersArray: any = {}
  response?.data?.data?.answers?.forEach((item: any, index: number) => {
    if (item.answer_two_gap_match) {
      answersArray[index] = item.title
    }
  })
  const ModifiedData = { questionImage, choices, droppables, correctAnswer: answersArray };
  if (response) return ModifiedData;
}