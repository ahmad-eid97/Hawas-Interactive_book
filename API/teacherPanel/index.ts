import { NewQuizPayload, NewQuestionPayload } from "./types";

export async function getAllTeacherQuizzes(_params: { page: number }) {
  return {
    quizzes: [],
    meta: { current_page: 1, last_page: 1, per_page: 10, total: 0 } as any,
    current_page: 1,
    last_page: 1,
    per_page: 10,
    total: 0,
  };
}

export async function addNewQuiz(_payload: NewQuizPayload) {
  return { success: true, message: 'الخدمة غير متاحة حالياً' };
}

export async function updateQuiz(_quizId: string, _payload: NewQuizPayload) {
  return { success: true, message: 'الخدمة غير متاحة حالياً' };
}

export async function deleteQuiz(_quizId: string) {
  return { success: true };
}

export async function showQuiz(_quizId: string) {
  return null as any;
}

export async function showQuizForStudents(_quizId: string) {
  return null as any;
}

export async function getAllSchools() {
  return { data: { schools: [] } };
}

export async function getAllSchoolClasses() {
  return { data: { school_classes: [] } };
}

export async function addNewQuestion(_payload: NewQuestionPayload) {
  return { success: true, message: 'الخدمة غير متاحة حالياً' };
}

export async function updateQuestion(_questionId: number, _payload: NewQuestionPayload) {
  return { success: true, message: 'الخدمة غير متاحة حالياً' };
}

export async function deleteQuestion(_questionId: string) {
  return { success: true };
}

export async function getQuestionDetails(_questionId: string) {
  return null as any;
}

export async function readHighlightStyles(_questionId: number) {
  return null;
}

export function readHighlight(_res: { styles: string, pathnames: string[], date: string }) {
  // No-op: backend offline
}