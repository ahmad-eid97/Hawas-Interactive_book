//== Utils
import api from "../handlers";

export async function getMatchingQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  const correctAnswers = response.data.data.answers.map((item: any) => ({ from: item.title, to: item.answer_two_gap_match }));
  const items = response.data.data.answers.map((item: any) => item)
  function shuffleArray(items: object[]) {
    function compareRandom() {
      return Math.random() - 0.5;
    }
    items.sort(compareRandom);
  }
  const answers = items.map((item: any) => item.answer_two_gap_match);
  shuffleArray(answers);
  const columnsData = {
    righthand: {
      title: response.data.data.title_right,
      items: items.map((item: any) => ({ content: item.title })),
    },

    lefthand: {
      title: response.data.data.title_left,
      items: answers.map((item: any) => ({ content: item })),
    }
  }
  const data = { correctAnswers, columnsData };
  if (response) return data;
}

export async function getSortingQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  const answers = response.data.data.answers.map((item: any) => item.title)
  function shuffleArray(answers: string[]) {
    function compareRandom(a: string, b: string) {
      return Math.random() - 0.5;
    }
    answers.sort(compareRandom);
  }
  shuffleArray(answers);
  const items = answers;
  const correctAnswers = response.data.data.answers.map((item: any) => item.title);
  const data = { items, correctAnswers };
  if (response) return data;
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

// NOT FINISHED
export async function getGroupFillBlanksQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  console.log(response)
  if (response) return response;
}

// NOT FINISHED
export async function getImageSingleChoiceQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  console.log(response)
  if (response) return response;
}

// NOT FINISHED
export async function getGroupSingleWordChoice(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  console.log(response)
  if (response) return response;
}

// NOT FINISHED
export async function getDrawingQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  console.log(response)
  if (response) return { questionImage: response.data.data.question_img };
}

// NOT FINISHED
export async function getGroupShortAnswer(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  console.log(response)
  if (response) return response;
}

// NOT FINISHED
export async function getGroupFillBlanksCompleteWordsQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  console.log(response)
  if (response) return response;
}

// NOT FINISHED
export async function getGroupOrderingQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  console.log(response)
  if (response) return response;
}

// NOT FINISHED
export async function getGroupRoundedSingleChoiceQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  console.log(response)
  if (response) return response;
}

// NOT FINISHED
export async function getGroupRadioSingleChoiceQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  console.log(response)
  if (response) return response;
}

export async function getSingleChoiceQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  const answers = response?.data?.data?.answers;
  if (response) return { answers };
}

export async function getGroupFillInBlankImageAnswerQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  console.log(response)
  if (response) return response;
}