import { NotePayload } from "./types";

export async function getAllNotes() {
  return { notes: { data: [] } };
}

export async function addNote(_payload: NotePayload) {
  return { success: true, message: 'تم حفظ الملاحظة', data: null };
}

export async function deleteNote(_noteId: number) {
  return { data: { success: true } };
}