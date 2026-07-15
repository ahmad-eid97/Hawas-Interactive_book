import type { StartQuizPayload, AnswerQuestionPayload, CorrectQuestionPayload } from './types';

export async function getAnswerAttempts(_question_id: number) {
  return { success: false, data: null as any };
}

export async function startQuiz(_payload: StartQuizPayload) {
  return { success: true, data: null as any };
}

export async function answerQuestion(_payload: AnswerQuestionPayload) {
  return { success: true };
}

export async function getQuestionsForTeacher() {
  return null as any;
}

export async function correctQuestion(_question_id: number, _payload: CorrectQuestionPayload) {
  return { success: true };
}