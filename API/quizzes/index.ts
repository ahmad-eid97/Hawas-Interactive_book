//== Utils
import api from "../handlers";

//== Shuffle Arrays
function shuffleArray(items: any) {
  function compareRandom() {
    return Math.random() - 0.5;
  }
  items.sort(compareRandom);
}

export async function getMatchingQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  const correctAnswers = response.data.data.answers.map((item: any) => ({ from: item.title, to: item.answer_two_gap_match ? item.answer_two_gap_match : item.answer_img }));
  const items = response.data.data.answers.map((item: any) => item)
  const answers = items.map((item: any) => item.answer_two_gap_match ? item.answer_two_gap_match : item.answer_img);
  shuffleArray(answers);
  const columnsData = {
    righthand: {
      title: response.data.data.title_right,
      items: items.map((item: any) => ({ content: item.title })),
    },

    lefthand: {
      title: response.data.data.title_left,
      type: items.filter((item: any) => item.answer_img && item.answer_img).length ? 'image' : 'text',
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

export async function getGroupRoundedFillBlanksQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  if (!response.data.data) return;
  const data = response.data.data;
  const items = data.children[0]?.answers?.map((item: any) => {
    const choicesArray = item.answer_two_gap_match.split("|")
    shuffleArray(choicesArray)
    return ({
      id: item.id,
      title: item.title.split(' ').map((str: string) => str === '{dash}' ? '-' : str),
      choices: choicesArray
    })
  })
  const correctAnswer: any = {}
  response?.data?.data?.children[0]?.answers?.forEach((answer: any, index: number) => {
    const places = [...answer.title.split(' ').map((str: string) => str === '{dash}' ? '-' : str)]
    const indexes: any = [];
    places.forEach((one: any, index: number) => {
      if (one === '-') {
        indexes.push(index)
      }
    })
    const group = [...answer.answer_two_gap_match.split('|')];
    const groupObject: any = {}
    for (let i = 0; i < group.length; i++) {
      if (indexes[i] !== undefined) {
        groupObject[indexes[i]] = group[i].trim();
      }
    }
    correctAnswer[index] = groupObject
  })
  const updatedResponse = { items, correctAnswer };
  if (response) return updatedResponse;
}

export async function getImageSingleChoiceQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  const items = response?.data?.data?.children?.map((item: any) => ({
    image: item.question_img,
    letters: item.answers.map((item: any) => item.title),
    correct: item.answers.filter((item: any) => item.is_correct === 1)[0].title
  }));
  if (response) return { items };
}

export async function getGroupSingleWordChoice(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  const items = response?.data?.data?.children?.map((item: any) => ({
    id: item.id,
    text: item.title,
    choices: item.answers.map((item: any) => item.title),
    correct: item.answers.filter((item: any) => item.is_correct === 1)[0].title
  }))
  if (response) return { items };
}

export async function getGroupOddWordChoice(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  const items = response?.data?.data?.children?.map((item: any) => ({
    id: item.id,
    words: item.answers.map((item: any) => item.title),
    correct: item.answers.filter((item: any) => item.is_correct === 1)[0].title
  }))
  if (response) return { items };
}

export async function getDrawingQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  if (response) return { questionImage: response.data.data.question_img };
}

export async function getColoringQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  if (response) return response?.data?.data;
}

export async function getGroupShortAnswer(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  const items = response?.data?.data?.children?.map((item: any) => (
    {
      id: item.id,
      text: item.title,
    }
  ));
  const correctAnswer: any = {}
  response?.data?.data?.children?.forEach((item: any, index: number) => {
    correctAnswer[index] = item.answers[0].answer_two_gap_match
  })
  const data = { items, correctAnswer };
  if (response) return data;
}

export async function getGroupFillBlanksCompleteWordsQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  const choices = response?.data?.data?.children[0].answers?.map((item: any) => ({ id: item.id, text: item.answer_two_gap_match }));
  shuffleArray(choices)
  const items = response?.data?.data?.children[0].answers?.map((item: any) => [...item.title.split(' ').map((str: string) => str === '{dash}' ? '-' : str)]);
  const correctAnswer = response?.data?.data?.children[0].answers?.map((item: any, index: number) => ({ [index]: item.answer_two_gap_match }));
  const answerObject = correctAnswer.reduce((acc: any, cur: any) => {
    const key = Object.keys(cur)[0];
    acc[key] = cur[key];
    return acc;
  }, {})
  const data = { items, choices, correctAnswer: answerObject };
  if (response) return data;
}

export async function getGroupFillBlanksQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  const choices: object[] = []
  response?.data?.data?.children[0].answers?.forEach((answer: any) => {
    answer.answer_two_gap_match.split('|').forEach((item: any) => {
      choices.push({ text: item })
    })
  });
  shuffleArray(choices)
  const items = response?.data?.data?.children[0].answers?.map((item: any) => [...item.title.split(' ').map((str: string) => str === '{dash}' ? '-' : str)]);

  const correctAnswer: any = {}
  response?.data?.data?.children[0].answers?.forEach((answer: any, index: number) => {
    const places = [...answer.title.split(' ').map((str: string) => str === '{dash}' ? '-' : str)]
    const indexes: any = [];
    places.forEach((one: any, index: number) => {
      if (one === '-') {
        indexes.push(index)
      }
    })
    const group = [...answer.answer_two_gap_match.split('|')];
    const groupObject: any = {}
    for (let i = 0; i < group.length; i++) {
      groupObject[indexes[i]] = group[i];
    }
    correctAnswer[index] = groupObject
  });
  const data = { items, choices, correctAnswer };
  if (response) return data;
}

export async function getGroupOrderingQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  const items = response?.data?.data?.children?.map((item: any) => {
    const arr = item?.answers.map((item: any) => item.title);
    shuffleArray(arr);
    return ({ answers: arr });
  });
  const correctAnswer: any = {}
  response?.data?.data?.children?.forEach((item: any, index: number) => {
    const obj: { [key: string]: string } = {}
    item.answers.forEach((element: any, index: number) => {
      obj[index] = element.title;
    });
    correctAnswer[index] = obj;
  })
  const data = { items, correctAnswer };
  if (response) return data;
}

export async function getGroupRoundedSingleChoiceQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  const items = response?.data?.data?.children?.map((item: any) => ({
    id: item.id,
    question: item.title,
    words: item.answers.map((item: any) => item.title),
    correct: item.answers.filter((item: any) => item.is_correct === 1)[0].title
  }));
  if (response) return { items };
}

export async function getGroupRadioSingleChoiceQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  const items = response?.data?.data?.children?.map((item: any) => ({
    id: item.id,
    question: item.title,
    words: item.answers.map((item: any) => item.title),
    correct: item.answers.filter((item: any) => item.is_correct === 1)[0].title
  }));
  if (response) return { items };
}

export async function getSingleChoiceQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  const answers = response?.data?.data?.answers;
  if (response) return { answers };
}

export async function getGroupFillInBlankImageAnswerQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  const items = response?.data?.data?.children[0].answers?.map((item: any) => ({
    id: item.id,
    text: item.title,
    image: item.answer_img
  }))
  const correctAnswer: any = {};
  response?.data?.data?.children[0].answers?.forEach((item: any, index: number) => {
    correctAnswer[index] = item.answer_two_gap_match;
  })
  if (response) return { items, correctAnswer };
}

export async function getGroupRawFillInBlankQuestion(questionId: number) {
  const response = await api.GET(`/e-books/questions/${questionId}?lang=ar`);
  if (!response.data.data) return;
  const data = response.data.data;
  const titles = [...data.tags?.split(',')]
  const items: any = {}
  data.children[0].answers.forEach((item: any, index: number) => {
    items[index] = {
      items: item.title.split(" ").map((str: string) => str === '{dash}' ? '-' : str)
    }
  })
  const correctAnswer: any = {}
  data.children[0].answers.forEach((answer: any, index: number) => {
    const places = [...answer.title.split(' ').map((str: string) => str === '{dash}' ? '-' : str)]
    const indexes: any = [];
    places.forEach((one: any, index: number) => {
      if (one === '-') {
        indexes.push(index)
      }
    })
    const group = [...answer.answer_two_gap_match.split('|')];
    const groupObject: any = {}
    for (let i = 0; i < group.length; i++) {
      groupObject[indexes[i]] = group[i].trim();
    }
    correctAnswer[index] = groupObject
  })
  const updatedResponse = { titles, items, correctAnswer }
  if (response) return updatedResponse;
}