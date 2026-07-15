export interface StartQuizPayload {
  quiz_id: number;
  book_id: number;
}

export interface AnswerQuestionPayload {
  quiz_attempt_id: number;
  question_id: number;
  given_answer: string;
}

export interface CorrectQuestionPayload {
  _method: string,
  is_correct: number;
  achieved_mark: string;
}