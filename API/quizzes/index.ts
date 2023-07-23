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

export async function getMatchingWithTableQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  const titles = { right: response.data.data.title_right, left: response.data.data.title_left };
  const items = response.data.data.answers.map((item: any) => ({ id: item.id, title: item.title }));
  const rightBox = response.data.data.answers.map((item: any) => item).filter((item: any) => item.answer_two_gap_match === titles.right).map((item: any) => item.title);
  const leftBox = response.data.data.answers.map((item: any) => item).filter((item: any) => item.answer_two_gap_match === titles.left).map((item: any) => item.title);
  const correctAnswer = {
    0: rightBox,
    1: leftBox
  }
  const data = { titles, items, correctAnswer };
  if (response) return data;
}